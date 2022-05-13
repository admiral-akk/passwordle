import { Word } from '../../structs/Word';
import { ToClientGameEvents } from '../../network/GameNetworkTypes';
import { AddedChar, LockedGuess, UpdatedAnswerKnowledge } from '../network/updates/Updates';
import { ClientSocket } from '../../client/ClientNetworking';
import { PlayerState } from '../../client/PlayerState';
export declare class ClientGame extends PlayerState implements ToClientGameEvents {
    Exit(): Promise<void>;
    protected Enter(): void;
    protected Register(socket: ClientSocket): void;
    protected Deregister(socket: ClientSocket): void;
    private board;
    constructor();
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
