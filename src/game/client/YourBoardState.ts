import {ToWord, Word} from '../structs/Word';
import {IsValidWord} from '../Words';
import {BoardState} from '../model/BoardState';

enum State {
  CanSubmit,
  Locked,
}

export class YourBoardState extends BoardState {
  private guesses: Word[] = [];
  private currentGuess = '';
  private state: State = State.Locked;
  private view: YourBoardView = new YourBoardView();

  AttemptAddChar(char: string): boolean {
    if (this.state !== State.CanSubmit) {
      return false;
    }
    if (this.currentGuess.length === 5) {
      return false;
    }
    return true;
  }

  AddChar(char: string) {
    this.currentGuess += char;
    this.view.AddChar(char);
  }

  AttemptDelete(): boolean {
    if (this.state !== State.CanSubmit) {
      return false;
    }
    if (this.currentGuess.length === 0) {
      return false;
    }
    return true;
  }

  Delete() {
    if (this.state !== State.CanSubmit) {
      return;
    }
    if (this.currentGuess.length === 0) {
      return;
    }

    this.currentGuess = this.currentGuess.slice(0, -1);
    this.view.Delete();
  }

  AttemptLockedGuess(): boolean {
    if (this.state !== State.CanSubmit) {
      return false;
    }
    console.log('');
    if (this.currentGuess.length !== 5) {
      this.view.GuessTooShort();
      return false;
    }
    const guess = ToWord(this.currentGuess);
    if (!IsValidWord(guess)) {
      this.view.GuessNotValid();
      return false;
    }
    return true;
  }

  LockedGuess(): Word {
    this.state = State.Locked;
    return ToWord(this.currentGuess);
  }
}

class YourBoardView {
  AddChar(char: string) {}
  Delete() {}
  GuessTooShort() {}
  GuessNotValid() {}
}
