import { GameServerSocket } from './GameNetworkTypes';
import { AddedChar, OpponentAddedChar } from './updates/Updates';
export declare class ClientGameMirror {
    private socket;
    private addedChar;
    private board;
    constructor(socket: GameServerSocket, addedChar: (update: AddedChar) => void);
    AddedChar(update: AddedChar): void;
    OpponentAddedChar(update: OpponentAddedChar): void;
}
