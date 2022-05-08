import { GameClientSocket, GameClientToServerEvents, GameServerToClientEvents } from '../network/GameNetworkTypes';
import { AddedChar, LockedGuess, UpdatedAnswerKnowledge } from '../network/updates/Updates';
import { Word } from '../structs/Word';
export declare class Board implements GameClientToServerEvents, GameServerToClientEvents {
    private socket;
    private yourBoard;
    private yourPassword;
    private opponentBoard;
    private opponentPassword;
    protected Register(socket: GameClientSocket): void;
    protected Deregister(socket: GameClientSocket): void;
    constructor(socket: GameClientSocket);
    OpponentAddedChar(): void;
    OpponentDeleted(): void;
    OpponentLockedGuess(): void;
    UpdatedAnswerKnowledge(update: UpdatedAnswerKnowledge): void;
    OpponentDisconnected(): void;
    SetSecret(secret: Word): void;
    AddedChar(update: AddedChar): void;
    Deleted(): void;
    LockedGuess(update: LockedGuess): void;
}
