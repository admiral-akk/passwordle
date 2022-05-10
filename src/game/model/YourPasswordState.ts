import {TargetProgress} from '../client/structs/TargetProgress';
import {YourPasswordView} from './view/YourPasswordView';
import {Word} from '../structs/Word';
import {LetterAnimation} from './view/struct/Animation';

enum State {
  WaitingForPassword,
  PasswordRecieved,
}

export class YourPasswordState {
  private password: Word | null = null;
  private knownCharacters: string[] = ['', '', '', '', ''];
  private state: State = State.WaitingForPassword;
  private view: YourPasswordView | null = null;

  constructor(hasView: boolean) {
    if (hasView) {
      this.view = new YourPasswordView();
    }
  }

  SetPassword(password: Word) {
    this.password = password;
    this.view?.SetSecret(this.password);
  }
  Exit() {
    this.view?.Exit();
  }

  Reset() {
    this.password = null;
    this.knownCharacters = ['', '', '', '', ''];
    this.state = State.WaitingForPassword;
  }

  Update(target: TargetProgress): LetterAnimation[] {
    for (let i = 0; i < target.knownCharacters.length; i++) {
      if (target.knownCharacters[i] !== '') {
        this.knownCharacters[i] = target.knownCharacters[i];
      }
    }
    this.view?.Update(target);
    return [];
  }

  Lost(): boolean {
    return this.knownCharacters.filter(c => c === '').length === 0;
  }
}
