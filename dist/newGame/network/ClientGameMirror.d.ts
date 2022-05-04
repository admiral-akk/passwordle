import { GameServerSocket, NewGameClientToServerEvents, NewGameServerToClientEvents } from './GameNetworkTypes';
import { AddedChar, UpdatedAnswerKnowledge } from './updates/Updates';
export declare class ClientGameMirror implements NewGameClientToServerEvents, NewGameServerToClientEvents {
    private socket;
    private addedChar;
    private ready;
    private board;
    constructor(socket: GameServerSocket, addedChar: (update: AddedChar) => void, ready: () => void);
    AddedChar(update: AddedChar): void;
    OpponentAddedChar(): void;
    Ready(): void;
    IsReady(): boolean;
    UpdatedAnswerKnowledge(update: UpdatedAnswerKnowledge): void;
}
