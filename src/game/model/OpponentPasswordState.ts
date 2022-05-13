import {TargetProgress} from '../../structs/TargetProgress';
import {ModelState} from './ModelState';
import {OpponentPasswordView} from './view/OpponentPasswordView';
import {LetterAnimation} from './view/struct/Animation';

enum State {
  WaitingForPassword,
  PasswordRecieved,
}

export class OpponentPasswordState extends ModelState<OpponentPasswordView> {
  private password: string[] = ['', '', '', '', ''];
  private state: State = State.WaitingForPassword;

  Update(progress: TargetProgress, playerGuess: string): LetterAnimation[] {
    for (let i = 0; i < progress.knownCharacters.length; i++) {
      if (progress.knownCharacters[i] !== '') {
        this.password[i] = progress.knownCharacters[i];
      }
    }
    if (this.view) {
      return this.view.Update(progress, playerGuess);
    }
    return [];
  }

  Won(): boolean {
    return this.password.filter(c => c === '').length === 0;
  }
}
