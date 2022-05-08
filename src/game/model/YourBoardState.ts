import {WordKnowledge} from '../client/structs/WordKnowledge';
import {CharUpdate} from '../client/view/CharUpdate';
import {YourBoardView} from '../client/view/subview/YourBoardView';
import {ToWord, Word} from '../structs/Word';
import {IsValidWord} from '../Words';

enum State {
  CanSubmit,
  Locked,
}

export class YourBoardState {
  private guesses: Word[] = [];
  private currentGuess = '';
  private state: State = State.CanSubmit;
  private view: YourBoardView | null = null;

  constructor(hasView: boolean) {
    if (hasView) {
      this.view = new YourBoardView();
    }
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
    console.log('');
    if (this.currentGuess.length !== 5) {
      return null;
    }
    const guess = ToWord(this.currentGuess);
    if (!IsValidWord(guess)) {
      return null;
    }
    this.state = State.Locked;
    return ToWord(this.currentGuess);
  }

  Update(knowledge: WordKnowledge) {
    this.guesses.push(ToWord(knowledge.guess));
    for (let i = 0; i < knowledge.guess.length; i++) {
      this.view?.SetCharKnowledge(
        this.guesses.length - 1,
        i,
        knowledge.guess[i],
        knowledge.letterKnowledge[i]
      );
    }
    this.currentGuess = '';
    this.state = State.CanSubmit;
  }

  Exit() {
    this.view?.Exit();
  }

  Reset() {
    this.guesses = [];
    this.currentGuess = '';
    this.state = State.CanSubmit;
  }
}
