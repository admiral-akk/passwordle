import {Word} from '../../structs/Word';
import {GameActions, GameUpdates} from '../../network/GameNetworkTypes';
import {
  AddedChar,
  IsGameOver,
  UpdatedAnswerKnowledge,
} from '../network/updates/Updates';
import {YourBoardState} from './YourBoardState';
import {YourPasswordState} from './YourPasswordState';
import {OpponentBoardState} from './OpponentBoardState';
import {OpponentPasswordState} from './OpponentPasswordState';
import {LetterAnimation} from './view/struct/Animation';
import {KeyboardState} from './KeyboardState';
import {TimerState} from './TimerState';
import {GetRandomGuess} from '../Words';
import {EndGameSummary} from '../../structs/EndGameState';
import {GameView} from './view/GameView';

enum State {
  None,
  SubmissionOpen,
  GuessSubmitted,
  RevealingHints,
  GameOver,
}

export class GameState implements GameActions, GameUpdates {
  private state: State = State.None;
  private view?: GameView;

  Exit() {
    this.yourBoard.Exit();
    this.yourPassword.Exit();
    this.opponentBoard.Exit();
    this.opponentPassword.Exit();
    this.keyboard.Exit();
    this.timer.Exit();
    this.view?.Exit();
  }

  private yourBoard: YourBoardState;
  private yourPassword: YourPasswordState;
  private opponentBoard: OpponentBoardState;
  private opponentPassword: OpponentPasswordState;
  private keyboard: KeyboardState;
  private timer: TimerState;

  constructor(
    viewRoot?: HTMLElement,
    private input: (key: string) => void = () => {},
    private submitRandomGuess: (
      guess: Word,
      currentGuessLength: number
    ) => void = () => {}
  ) {
    if (viewRoot) {
      this.view = new GameView(viewRoot);
      this.yourBoard = new YourBoardState(this.view!.yourBoard!);
      this.yourPassword = new YourPasswordState(this.view!.yourPassword!);
      this.opponentBoard = new OpponentBoardState(this.view!.opponentBoard!);
      this.opponentPassword = new OpponentPasswordState(
        this.view!.opponentPassword!
      );
      this.keyboard = new KeyboardState(this.view!.keyboard!, this.input);
      this.timer = new TimerState(this.view!.timer!, () =>
        this.TimerExhausted()
      );
    } else {
      this.yourBoard = new YourBoardState();
      this.yourPassword = new YourPasswordState();
      this.opponentBoard = new OpponentBoardState();
      this.opponentPassword = new OpponentPasswordState();
      this.keyboard = new KeyboardState();
      this.timer = new TimerState();
    }
  }
  GameClientReady() {}
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
