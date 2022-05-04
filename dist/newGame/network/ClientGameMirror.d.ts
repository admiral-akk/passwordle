import { GameServerSocket, NewGameClientToServerEvents, NewGameServerToClientEvents } from './GameNetworkTypes';
import { AddedChar, UpdatedAnswerKnowledge } from './updates/Updates';
export declare class ClientGameMirror implements NewGameClientToServerEvents, NewGameServerToClientEvents {
    private socket;
    private addedChar;
    private board;
    constructor(socket: GameServerSocket, addedChar: (update: AddedChar) => void);
    AddedChar(update: AddedChar): void;
    OpponentAddedChar(): void;
    UpdatedAnswerKnowledge(update: UpdatedAnswerKnowledge): void;
}
