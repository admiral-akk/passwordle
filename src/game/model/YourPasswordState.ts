import {TargetProgress} from '../client/structs/TargetProgress';
import {YourPasswordView} from './view/YourPasswordView';
import {Word} from '../structs/Word';
import {LetterAnimation} from './view/struct/Animation';
import {ModelState} from './ModelState';

enum State {
  WaitingForPassword,
  PasswordRecieved,
}

export class YourPasswordState extends ModelState<YourPasswordView> {
  private password: Word | null = null;
  private knownCharacters: string[] = ['', '', '', '', ''];
  private state: State = State.WaitingForPassword;

  constructor(hasView: boolean) {
    super(YourPasswordView, hasView);
  }

  SetPassword(password: Word) {
    this.password = password;
    this.view?.SetSecret(this.password);
  }

  Reset() {
    this.password = null;
    this.knownCharacters = ['', '', '', '', ''];
    this.state = State.WaitingForPassword;
  }

  Update(target: TargetProgress, playerGuess: string): LetterAnimation[] {
    for (let i = 0; i < target.knownCharacters.length; i++) {
      if (target.knownCharacters[i] !== '') {
        this.knownCharacters[i] = target.knownCharacters[i];
      }
    }
    if (this.view) {
      return this.view.Update(target, playerGuess);
    }
    return [];
  }

  Lost(): boolean {
    return this.knownCharacters.filter(c => c === '').length === 0;
  }
}
