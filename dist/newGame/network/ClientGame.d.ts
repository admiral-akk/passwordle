import { GameClientSocket } from './GameNetworkTypes';
import { AddedChar, OpponentAddedChar } from './updates/Updates';
export declare class ClientGame {
    private socket;
    private board;
    constructor(socket: GameClientSocket);
    AddChar(char: string): AddedChar;
    OpponentAddedChar(update: OpponentAddedChar): void;
}
