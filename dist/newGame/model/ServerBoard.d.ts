import { PlayerId } from '../../PlayerId';
import { AddedChar, OpponentAddedChar } from '../network/updates/Updates';
export declare class ServerBoard {
    addedChar(player: PlayerId, update: AddedChar): OpponentAddedChar;
}
