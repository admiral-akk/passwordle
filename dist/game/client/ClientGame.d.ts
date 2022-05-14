import { Word } from '../../structs/Word';
import { GameUpdates } from '../../network/GameNetworkTypes';
import { AddedChar, LockedGuess, UpdatedAnswerKnowledge } from '../network/Updates';
import { ClientSocket } from '../../client/ClientNetworking';
export declare class ClientGame implements GameUpdates {
    private socket;
    protected Register(socket: ClientSocket): void;
    StartGame(): void;
    private board;
    constructor(socket: ClientSocket);
    AddedChar(update: AddedChar): void;
    Deleted(): void;
    LockedGuess(update: LockedGuess): void;
    private state;
    private SubmitRandomGuess;
    private Input;
    OpponentDisconnected(): void;
    SetSecret(secret: Word): void;
    OpponentLockedGuess(): void;
    OpponentDeleted(): void;
    OpponentAddedChar(): void;
    EndGame(): Promise<void>;
    UpdatedAnswerKnowledge(update: UpdatedAnswerKnowledge): void;
    AddChar(char: string): void;
    Delete(): void;
    Submit(): void;
}
