import {TargetProgress} from '../../structs/TargetProgress';
import {YourPasswordView} from './view/YourPasswordView';
import {Word} from '../../structs/Word';
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

  SetPassword(password: Word) {
    this.password = password;
    this.view?.SetSecret(this.password);
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
