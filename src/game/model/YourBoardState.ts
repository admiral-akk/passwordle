import {WordKnowledge} from '../client/structs/WordKnowledge';
import {CharUpdate} from './CharUpdate';
import {YourBoardView} from './view/YourBoardView';
import {ToWord, Word} from '../structs/Word';
import {IsValidWord} from '../Words';
import {
  ErrorType,
  GuessLocked,
  LockedGuessError,
} from '../network/updates/Updates';
import {LetterAnimation} from './view/struct/Animation';
import {ModelState} from './ModelState';

enum State {
  CanSubmit,
  Locked,
}

export class YourBoardState extends ModelState<YourBoardView> {
  private guesses: Word[] = [];
  private currentGuess = '';
  private state: State = State.CanSubmit;

  constructor(hasView: boolean) {
    super(YourBoardView, hasView);
  }

  AddChar(char: string): boolean {
    if (this.state !== State.CanSubmit) {
      return false;
    }
    if (this.currentGuess.length === 5) {
      return false;
    }
    const update = new CharUpdate(
      char,
      this.guesses.length,
      this.currentGuess.length
    );
    this.currentGuess += char;
    this.view?.CharUpdate(update);
    if (this.currentGuess.length === 5) {
      const guess = ToWord(this.currentGuess);
      if (!IsValidWord(guess)) {
        this.view?.SubmitError(
          new LockedGuessError(
            ErrorType.NotValidWord,
            this.guesses.length,
            this.currentGuess.length
          )
        );
      }
    }
    return true;
  }

  Delete(): boolean {
    if (this.state !== State.CanSubmit) {
      return false;
    }
    if (this.currentGuess.length === 0) {
      return false;
    }
    this.currentGuess = this.currentGuess.slice(0, -1);
    const update = new CharUpdate(
      '',
      this.guesses.length,
      this.currentGuess.length
    );
    this.view?.CharUpdate(update);
    return true;
  }

  LockedGuess(): Word | null {
    if (this.state !== State.CanSubmit) {
      return null;
    }
    if (this.currentGuess.length !== 5) {
      this.view?.SubmitError(
        new LockedGuessError(
          ErrorType.TooShort,
          this.guesses.length,
          this.currentGuess.length
        )
      );
      return null;
    }
    const guess = ToWord(this.currentGuess);
    if (!IsValidWord(guess)) {
      this.view?.SubmitError(
        new LockedGuessError(
          ErrorType.NotValidWord,
          this.guesses.length,
          this.currentGuess.length
        )
      );
      return null;
    }
    this.state = State.Locked;
    this.view?.GuessLocked(new GuessLocked(this.guesses.length));
    return ToWord(this.currentGuess);
  }

  Update(knowledge: WordKnowledge): LetterAnimation[] {
    this.guesses.push(ToWord(knowledge.guess));
    const animations: LetterAnimation[] = [];
    for (let i = 0; i < knowledge.guess.length; i++) {
      animations.push(
        new LetterAnimation(i, () =>
          this.view?.SetCharKnowledge(
            this.guesses.length - 1,
            i,
            knowledge.guess[i],
            knowledge.letterKnowledge[i]
          )
        )
      );
    }
    this.currentGuess = '';
    this.state = State.CanSubmit;
    return animations;
  }

  CurrentGuessLength(): number {
    return this.currentGuess.length;
  }
  GuessCount(): number {
    return this.guesses.length;
  }

  Reset() {
    this.guesses = [];
    this.currentGuess = '';
    this.state = State.CanSubmit;
  }
}
