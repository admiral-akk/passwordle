import {Word} from '../structs/Word';
import {BoardState} from '../model/BoardState';

enum State {
  WaitingForPassword,
  PasswordRecieved,
}

export class YourPasswordState extends BoardState {
  private password: Word | null = null;
  private state: State = State.WaitingForPassword;
  private view: YourPasswordView = new YourPasswordView();

  SetPassword(password: Word) {
    this.password = password;
    this.view.SetPassword(this.password);
  }
}

class YourPasswordView {
  SetPassword(password: Word) {}
}
