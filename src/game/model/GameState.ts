import {ToWord, Word} from '../../structs/Word';
import {GameActions, GameUpdates} from '../../network/GameNetworkTypes';
import {
  AddedChar,
  IsGameOver,
  LockedGuess,
  UpdatedAnswerKnowledge,
} from '../network/Updates';
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
import {TargetProgress, UpdateProgress} from '../../structs/TargetProgress';
import {GetKnowledge} from '../logic/WordleLogic';

enum State {
  None,
  SubmissionOpen,
  GuessSubmitted,
  RevealingHints,
  GameOver,
}

export interface ImmutableGameState {
  CanAddChar(update: AddedChar): boolean;
  CanDelete(): boolean;
  CanLockGuess(): boolean;
  IsReadyForNewGame(): boolean;
}

export class GameState implements GameUpdates, ImmutableGameState {
  private state: State = State.None;
  private view?: GameView;

  Reset() {
    this.yourBoard.Reset();
    this.yourPassword.Reset();
    this.opponentBoard.Reset();
    this.opponentPassword.Reset();
    this.keyboard.Reset();
    this.timer.Reset();
    this.endGame = undefined;
    this.state = State.None;
  }

  private yourBoard: YourBoardState;
  private yourPassword: YourPasswordState;
  private opponentBoard: OpponentBoardState;
  private opponentPassword: OpponentPasswordState;
  private keyboard: KeyboardState;
  private timer: TimerState;

  public GuessSubmitted(): boolean {
    return this.state === State.GuessSubmitted;
  }
  public GetCurrentGuess(): Word {
    return ToWord(this.yourBoard.currentGuess);
  }
  public GetPassword(): Word {
    return this.yourPassword.password!;
  }
  public GetProgress(): TargetProgress {
    return this.yourPassword.GetProgress();
  }

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

  RandomGuess(guess: Word) {
    for (let i = 0; i < guess.length; i++) {
      this.Deleted();
    }
    for (let i = 0; i < guess.length; i++) {
      this.AddedChar(new AddedChar(guess[i]));
    }
    this.LockedGuess();
  }

  AddedChar(update: AddedChar) {
    return this.yourBoard.AddChar(update.char);
  }

  Deleted() {
    return this.yourBoard.Delete();
  }

  LockedGuess() {
    this.state = State.GuessSubmitted;
    this.yourBoard.LockedGuess(this.opponentBoard.Submitted());
  }

  CanAddChar(update: AddedChar): boolean {
    if (update.char.length !== 1) {
      return false;
    }
    if (!/^[a-zA-Z]+$/.test(update.char)) {
      return false;
    }
    if (this.state !== State.SubmissionOpen) {
      return false;
    }
    return this.yourBoard.CanAddChar();
  }

  CanDelete(): boolean {
    if (this.state !== State.SubmissionOpen) {
      return false;
    }
    return this.yourBoard.CanDelete();
  }

  CanLockGuess(): boolean {
    if (this.state !== State.SubmissionOpen) {
      return false;
    }
    return this.yourBoard.CanSubmit();
  }

  IsReadyForNewGame(): boolean {
    return this.state === State.None;
  }

  GenerateKnowledgeUpdate(
    opponentGuess: Word,
    opponentPassword: Word
  ): UpdatedAnswerKnowledge {
    const yourGuess = this.GetCurrentGuess();
    const yourPassword = this.yourPassword.GetPassword();

    const yourKnowledge = GetKnowledge(yourGuess, opponentPassword);
    const opponentKnowledge = GetKnowledge(opponentGuess, opponentPassword);

    const yourProgress = this.yourPassword.GetProgress();
    UpdateProgress(yourProgress, GetKnowledge(yourGuess, yourPassword));
    UpdateProgress(yourProgress, GetKnowledge(opponentGuess, yourPassword));

    const opponentProgress = this.opponentPassword.GetProgress();
    UpdateProgress(opponentProgress, GetKnowledge(yourGuess, opponentPassword));
    UpdateProgress(
      opponentProgress,
      GetKnowledge(opponentGuess, opponentPassword)
    );

    return new UpdatedAnswerKnowledge(
      yourKnowledge,
      opponentKnowledge,
      yourProgress,
      opponentProgress,
      yourPassword,
      opponentPassword
    );
  }

  GameClientReady() {}
  OpponentDisconnected() {}

  TimerExhausted() {
    this.submitRandomGuess(
      GetRandomGuess(),
      this.yourBoard.CurrentGuessLength()
    );
  }

  IsGameOver(): boolean {
    return this.endGame !== undefined;
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

  private endGame?: EndGameSummary;

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

    // Sequence them
    const sequence: Record<number, (() => void)[]> = {};
    animations.forEach(animation => {
      const index = animation.letterIndex;
      if (!(index in sequence)) {
        sequence[index] = [];
      }
      sequence[index].push(animation.animationStart);
    });
    this.keyboard.Update([update.playerKnowledge, update.opponentKnowledge]);

    // String them into a promise
    let promise = new Promise<void>(resolve => {
      resolve();
    });
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
      this.endGame = update.endGameState!;
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
