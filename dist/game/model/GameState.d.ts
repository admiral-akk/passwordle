import { Word } from '../../structs/Word';
import { GameUpdates } from '../../network/GameNetworkTypes';
import { AddedChar, UpdatedAnswerKnowledge } from '../network/Updates';
import { EndGameSummary } from '../../structs/EndGameState';
import { TargetProgress } from '../../structs/TargetProgress';
export interface ImmutableGameState {
    CanAddChar(update: AddedChar): boolean;
    CanDelete(): boolean;
    CanLockGuess(): boolean;
    IsReadyForNewGame(): boolean;
}
export declare class GameState implements GameUpdates, ImmutableGameState {
    private input;
    private submitRandomGuess;
    private state;
    private view?;
    Reset(): void;
    private yourBoard;
    private yourPassword;
    private opponentBoard;
    private opponentPassword;
    private keyboard;
    private timer;
    GuessSubmitted(): boolean;
    GetCurrentGuess(): Word;
    GetPassword(): Word;
    GetProgress(): TargetProgress;
    constructor(viewRoot?: HTMLElement, input?: (key: string) => void, submitRandomGuess?: (guess: Word, currentGuessLength: number) => void);
    RandomGuess(guess: Word): void;
    AddedChar(update: AddedChar): boolean;
    Deleted(): boolean;
    LockedGuess(): void;
    CanAddChar(update: AddedChar): boolean;
    CanDelete(): boolean;
    CanLockGuess(): boolean;
    IsReadyForNewGame(): boolean;
    GenerateKnowledgeUpdate(opponentGuess: Word, opponentPassword: Word): UpdatedAnswerKnowledge;
    GameClientReady(): void;
    OpponentDisconnected(): void;
    TimerExhausted(): void;
    IsGameOver(): boolean;
    GameOver(): EndGameSummary;
    OpponentAddedChar(): void;
    OpponentDeleted(): void;
    OpponentLockedGuess(): void;
    private endGame?;
    UpdatedAnswerKnowledge(update: UpdatedAnswerKnowledge): Promise<void>;
    SetSecret(secret: Word): void;
}
