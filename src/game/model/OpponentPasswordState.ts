import {OpponentPasswordView} from '../client/view/subview/OpponentPasswordView';
import {Word} from '../structs/Word';

enum State {
  WaitingForPassword,
  PasswordRecieved,
}

export class OpponentPasswordState {
  private password: Word | null = null;
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
    this.password = null;
    this.state = State.WaitingForPassword;
  }
}
