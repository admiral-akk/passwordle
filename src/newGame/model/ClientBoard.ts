import {AddedChar} from '../network/updates/Updates';

export class ClientBoard {
  AddChar(char: string): AddedChar {
    return new AddedChar(char);
  }

  OpponentAddedChar() {}
}
