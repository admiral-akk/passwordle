import {TargetProgress} from '../client/structs/TargetProgress';
import {OpponentPasswordView} from './view/OpponentPasswordView';
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

  Update(progress: TargetProgress) {
    this.view?.Update(progress);
  }
}
