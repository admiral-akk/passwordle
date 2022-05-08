import {YourPasswordView} from '../client/view/subview/YourPasswordView';
import {Word} from '../structs/Word';

enum State {
  WaitingForPassword,
  PasswordRecieved,
}

export class YourPasswordState {
  private password: Word | null = null;
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
    this.state = State.WaitingForPassword;
  }
}
