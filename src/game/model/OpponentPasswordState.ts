import {TargetProgress} from '../client/structs/TargetProgress';
import {OpponentPasswordView} from './view/OpponentPasswordView';

enum State {
  WaitingForPassword,
  PasswordRecieved,
}

export class OpponentPasswordState {
  private password: string[] = ['', '', '', '', ''];
  private state: State = State.WaitingForPassword;
  private view: OpponentPasswordView | null = null;

  constructor(hasView: boolean) {
    if (hasView) {
      this.view = new OpponentPasswordView();
    }
  }
  Exit() {
    this.view?.Exit();
  }

  Reset() {
    this.password = ['', '', '', '', ''];
    this.state = State.WaitingForPassword;
  }

  Update(progress: TargetProgress) {
    for (let i = 0; i < progress.knownCharacters.length; i++) {
      if (progress.knownCharacters[i] !== '') {
        this.password[i] = progress.knownCharacters[i];
      }
    }
    this.view?.Update(progress);
  }

  Won(): boolean {
    return this.password.filter(c => c === '').length === 0;
  }
}
