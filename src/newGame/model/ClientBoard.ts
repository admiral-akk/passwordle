import {AddedChar, UpdatedAnswerKnowledge} from '../network/updates/Updates';

enum State {
  None,
  WaitingForKnowledge,
  CanSubmit,
}

export class ClientBoard {
  state: State = State.None;
  AddChar(char: string): AddedChar {
    return new AddedChar(char);
  }

  OpponentAddedChar() {}

  Ready() {
    this.state = State.WaitingForKnowledge;
  }

  IsReady(): boolean {
    return this.state === State.WaitingForKnowledge;
  }

  UpdatedAnswerKnowledge(update: UpdatedAnswerKnowledge) {}
}
