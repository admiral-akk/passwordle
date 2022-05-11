import { Word } from '../structs/Word';
import { GameClientToServerEvents, GameServerToClientEvents } from '../network/GameNetworkTypes';
import { AddedChar, UpdatedAnswerKnowledge } from '../network/updates/Updates';
export declare enum GameOverState {
    None = 0,
    Win = 1,
    Loss = 2,
    Tie = 3,
    OpponentDisconnected = 4
}
export declare class PlayerBoard implements GameClientToServerEvents, GameServerToClientEvents {
    private hasView;
    private input;
    private Reset;
    Exit(): void;
    constructor(hasView?: boolean, input?: (key: string) => void);
    GameClientReady(): void;
    private yourBoard;
    private yourPassword;
    private opponentBoard;
    private opponentPassword;
    private notification;
    private keyboard;
    private timer;
    OpponentDisconnected(): void;
    TimerExhausted(): void;
    AddedChar(update: AddedChar): boolean;
    Deleted(): boolean;
    LockedGuess(): Word | null;
    IsGameOver(): boolean;
    GameOver(): GameOverState;
    OpponentAddedChar(): void;
    OpponentDeleted(): void;
    OpponentLockedGuess(): void;
    UpdatedAnswerKnowledge(update: UpdatedAnswerKnowledge): Promise<void>;
    SetSecret(secret: Word): void;
}
