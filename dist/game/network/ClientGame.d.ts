import { Word } from '../structs/Word';
import { GameClientSocket, GameServerToClientEvents } from './GameNetworkTypes';
import { UpdatedAnswerKnowledge } from './updates/Updates';
export declare class ClientGame implements GameServerToClientEvents {
    private socket;
    private board;
    constructor(socket: GameClientSocket);
    SetSecret(secret: Word): void;
    OpponentLockedGuess(): void;
    OpponentDeleted(): void;
    OpponentAddedChar(): void;
    UpdatedAnswerKnowledge(update: UpdatedAnswerKnowledge): void;
    AddChar(char: string): void;
    Delete(): void;
    Submit(): void;
}
