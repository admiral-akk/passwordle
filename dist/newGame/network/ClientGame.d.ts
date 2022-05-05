import { Word } from '../../game/structs/Word';
import { GameClientSocket, NewGameServerToClientEvents } from './GameNetworkTypes';
import { UpdatedAnswerKnowledge } from './updates/Updates';
export declare class ClientGame implements NewGameServerToClientEvents {
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
