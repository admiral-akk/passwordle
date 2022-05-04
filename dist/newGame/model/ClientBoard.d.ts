import { AddedChar, OpponentAddedChar } from '../network/updates/Updates';
export declare class ClientBoard {
    AddChar(char: string): AddedChar;
    OpponentAddedChar(update: OpponentAddedChar): void;
}
