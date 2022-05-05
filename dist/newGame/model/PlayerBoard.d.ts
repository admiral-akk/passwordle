import { GameView } from '../../game/client/view/GameView';
import { Word } from '../../game/structs/Word';
import { NewGameClientToServerEvents, NewGameServerToClientEvents } from '../network/GameNetworkTypes';
import { AddedChar, Deleted, LockedGuess, UpdatedAnswerKnowledge } from '../network/updates/Updates';
declare enum State {
    WaitingForKnowledge = 0,
    CanSubmit = 1,
    GameEnded = 2
}
export declare class PlayerBoard implements NewGameClientToServerEvents, NewGameServerToClientEvents {
    private view;
    constructor(view?: GameView | null);
    OpponentLockedGuess(): void;
    AddedChar(update: AddedChar): void;
    Deleted(): void;
    LockedGuess(update: LockedGuess): void;
    state: State;
    guesses: Word[];
    currentGuess: string;
    secret: Word | null;
    AddCharCommand(char: string): AddedChar | null;
    DeleteCommand(): Deleted | null;
    SubmitCommand(): LockedGuess | null;
    OpponentAddedChar(): void;
    OpponentDeleted(): void;
    UpdatedAnswerKnowledge(update: UpdatedAnswerKnowledge): void;
    SetSecret(secret: Word): void;
}
export {};
