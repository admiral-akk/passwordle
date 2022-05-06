import { GameView } from '../client/view/GameView';
import { Word } from '../structs/Word';
import { GameClientToServerEvents, GameServerToClientEvents } from '../network/GameNetworkTypes';
import { AddedChar, Deleted, LockedGuess, UpdatedAnswerKnowledge } from '../network/updates/Updates';
declare enum State {
    WaitingForKnowledge = 0,
    CanSubmit = 1,
    GameEnded = 2
}
export declare class PlayerBoard implements GameClientToServerEvents, GameServerToClientEvents {
    private view;
    private showMenu;
    state: State;
    guesses: Word[];
    currentGuess: string;
    private GuessCount;
    opponentCharCount: number;
    secret: Word | null;
    constructor(view?: GameView | null, showMenu?: () => void);
    OpponentDisconnected(): void;
    AddedChar(update: AddedChar): void;
    Deleted(): void;
    LockedGuess(update: LockedGuess): void;
    AddCharCommand(char: string): AddedChar | null;
    DeleteCommand(): Deleted | null;
    SubmitCommand(): LockedGuess | null;
    OpponentAddedChar(): void;
    OpponentDeleted(): void;
    OpponentLockedGuess(): void;
    UpdatedAnswerKnowledge(update: UpdatedAnswerKnowledge): void;
    private CheckGameOver;
    SetSecret(secret: Word): void;
    private Reset;
}
export {};
