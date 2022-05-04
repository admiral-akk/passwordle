import { GameServerSocket, NewGameClientToServerEvents, NewGameServerToClientEvents } from './GameNetworkTypes';
import { AddedChar, Submitted, UpdatedAnswerKnowledge } from './updates/Updates';
export declare class ClientGameMirror implements NewGameClientToServerEvents, NewGameServerToClientEvents {
    private socket;
    private board;
    private otherPlayer;
    constructor(socket: GameServerSocket);
    OpponentSubmitted(): void;
    Submitted(update: Submitted): void;
    RegisterOtherPlayer(otherPlayer: ClientGameMirror): void;
    Deleted(): void;
    AddedChar(update: AddedChar): void;
    OpponentDeleted(): void;
    OpponentAddedChar(): void;
    UpdatedAnswerKnowledge(update: UpdatedAnswerKnowledge): void;
}
