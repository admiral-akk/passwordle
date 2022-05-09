import { Word } from '../structs/Word';
import { GameClientToServerEvents, GameServerToClientEvents } from '../network/GameNetworkTypes';
import { AddedChar, UpdatedAnswerKnowledge } from '../network/updates/Updates';
declare enum State {
    WaitingForKnowledge = 0,
    CanSubmit = 1,
    GameEnded = 2
}
export declare class PlayerBoard implements GameClientToServerEvents, GameServerToClientEvents {
    private hasView;
    private Reset;
    Exit(): void;
    state: State;
    constructor(hasView?: boolean);
    GameClientReady(): void;
    private yourBoard;
    private yourPassword;
    private opponentBoard;
    private opponentPassword;
    OpponentDisconnected(): void;
    AddedChar(update: AddedChar): boolean;
    Deleted(): boolean;
    LockedGuess(): Word | null;
    IsGameOver(): boolean;
    OpponentAddedChar(): void;
    OpponentDeleted(): void;
    OpponentLockedGuess(): void;
    UpdatedAnswerKnowledge(update: UpdatedAnswerKnowledge): void;
    SetSecret(secret: Word): void;
}
export {};
