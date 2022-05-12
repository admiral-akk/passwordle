import {Word} from '../structs/Word';
import {
  GameClientToServerEvents,
  GameServerToClientEvents,
} from '../network/GameNetworkTypes';
import {
  AddedChar,
  GameOverState,
  IsGameOver,
  UpdatedAnswerKnowledge,
} from '../network/updates/Updates';
import {YourBoardState} from './YourBoardState';
import {YourPasswordState} from './YourPasswordState';
import {OpponentBoardState} from './OpponentBoardState';
import {OpponentPasswordState} from './OpponentPasswordState';
import {LetterAnimation} from './view/struct/Animation';
import {NotificationState} from './NotificationState';
import {KeyboardState} from './KeyboardState';
import {TimerState} from './TimerState';
import {GetRandomGuess} from '../Words';
import {EndGameState, EndGameSummary} from '../../util/struct/EndGameState';

enum State {
  None,
  SubmissionOpen,
  GuessSubmitted,
  RevealingHints,
  GameOver,
}

export class PlayerBoard
  implements GameClientToServerEvents, GameServerToClientEvents
{
  private state: State = State.None;
  Exit() {
    this.yourBoard.Exit();
    this.yourPassword.Exit();
    this.opponentBoard.Exit();
    this.opponentPassword.Exit();
    this.notification.Exit();
    this.keyboard.Exit();
    this.timer.Exit();
  }

  constructor(
    private hasView: boolean = false,
    private input: (key: string) => void = () => {},
    private submitRandomGuess: (
      guess: Word,
      currentGuessLength: number
    ) => void = () => {}
  ) {}
  GameClientReady() {}

  private yourBoard: YourBoardState = new YourBoardState(this.hasView);
  private yourPassword: YourPasswordState = new YourPasswordState(this.hasView);
  private opponentBoard: OpponentBoardState = new OpponentBoardState(
    this.hasView
  );
  private opponentPassword: OpponentPasswordState = new OpponentPasswordState(
    this.hasView
  );
  private notification: NotificationState = new NotificationState(this.hasView);
  private keyboard: KeyboardState = new KeyboardState(this.hasView, this.input);
  private timer: TimerState = new TimerState(this.hasView, () =>
    this.TimerExhausted()
  );

  OpponentDisconnected() {}

  TimerExhausted() {
    this.submitRandomGuess(
      GetRandomGuess(),
      this.yourBoard.CurrentGuessLength()
    );
  }

  AddedChar(update: AddedChar): boolean {
    if (this.state !== State.SubmissionOpen) {
      return false;
    }
    return this.yourBoard.AddChar(update.char);
  }

  Deleted(): boolean {
    if (this.state !== State.SubmissionOpen) {
      return false;
    }
    return this.yourBoard.Delete();
  }

  LockedGuess(): Word | null {
    if (this.state !== State.SubmissionOpen) {
      return null;
    }
    const res = this.yourBoard.LockedGuess();
    if (res) {
      this.timer.LockedGuess();
      this.state = State.GuessSubmitted;
    }
    return res;
  }

  IsGameOver(): boolean {
    return this.endGame !== null;
  }

  GameOver(): EndGameSummary {
    return this.endGame!;
  }

  OpponentAddedChar() {
    this.opponentBoard.OpponentAddedChar();
  }
  OpponentDeleted() {
    this.opponentBoard.OpponentDeleted();
  }
  OpponentLockedGuess() {
    this.opponentBoard.OpponentLockedGuess();
    this.timer.OpponentSubmitted();
  }

  private endGame: EndGameSummary | null = null;

  UpdatedAnswerKnowledge(update: UpdatedAnswerKnowledge): Promise<void> {
    this.state = State.RevealingHints;
    // Gather animations
    this.timer.UpdateKnowledge();
    const animations: LetterAnimation[] = [];
    animations.push(...this.yourBoard.Update(update.playerKnowledge));
    animations.push(...this.opponentBoard.Update(update.opponentKnowledge));

    animations.push(
      ...this.yourPassword.Update(
        update.playerProgress,
        update.playerKnowledge.guess
      )
    );
    animations.push(
      ...this.opponentPassword.Update(
        update.opponentProgress,
        update.playerKnowledge.guess
      )
    );

    this.keyboard.Update([update.playerKnowledge, update.opponentKnowledge]);

    // Sequence them
    const sequence: Record<number, (() => void)[]> = {};
    animations.forEach(animation => {
      const index = animation.letterIndex;
      if (!(index in sequence)) {
        sequence[index] = [];
      }
      sequence[index].push(animation.animationStart);
    });

    // String them into a promise
    let promise = new Promise<void>(resolve => resolve());
    for (let i = 0; i < 10; i++) {
      if (!(i in sequence)) {
        continue;
      }
      sequence[i].forEach(animationCallback => {
        promise = promise.then(() => {
          animationCallback();
          return Promise.resolve();
        });
      });
      promise = promise.then(
        () => new Promise(resolve => setTimeout(resolve, 400))
      );
    }

    // Check if the game is over
    if (IsGameOver(update)) {
      this.endGame = update.endGameState;
      this.state = State.GameOver;
      switch (GameOverState(update)) {
        case EndGameState.Loss:
          promise.then(() => this.notification.Lost());
          break;
        case EndGameState.Win:
          promise.then(() => this.notification.Won());
          break;
        case EndGameState.Tie:
          promise.then(() => this.notification.Tied());
          break;
      }
    } else {
      // Enable submission
      promise = promise.then(() => {
        this.state = State.SubmissionOpen;
        return Promise.resolve();
      });
    }

    return promise;
  }

  SetSecret(secret: Word) {
    this.yourPassword.SetPassword(secret);
    this.state = State.SubmissionOpen;
  }
}
