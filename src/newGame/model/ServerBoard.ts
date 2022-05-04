import {PlayerId} from '../../PlayerId';
import {AddedChar, OpponentAddedChar} from '../network/updates/Updates';

export class ServerBoard {
  addedChar(player: PlayerId, update: AddedChar): OpponentAddedChar {
    return new OpponentAddedChar();
  }
}
