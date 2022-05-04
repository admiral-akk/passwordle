import { GameView } from '../../game/client/view/GameView';
import { Word } from '../../game/structs/Word';
import { NewGameClientToServerEvents, NewGameServerToClientEvents } from '../network/GameNetworkTypes';
import { AddedChar, Deleted, Submitted, UpdatedAnswerKnowledge } from '../network/updates/Updates';
declare enum State {
    WaitingForKnowledge = 0,
    CanSubmit = 1
}
export declare class PlayerBoard implements NewGameClientToServerEvents, NewGameServerToClientEvents {
    private view;
    constructor(view?: GameView | null);
    OpponentSubmitted(): void;
    AddedChar(update: AddedChar): void;
    Deleted(): void;
    Submitted(update: Submitted): void;
    state: State;
    guesses: Word[];
    currentGuess: string;
    secret: Word | null;
    AddCharCommand(char: string): AddedChar | null;
    DeleteCommand(): Deleted | null;
    SubmitCommand(): Submitted | null;
    OpponentAddedChar(): void;
    OpponentDeleted(): void;
    UpdatedAnswerKnowledge(update: UpdatedAnswerKnowledge): void;
}
export {};
