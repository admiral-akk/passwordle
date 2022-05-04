import { GameView } from '../../game/client/view/GameView';
import { Word } from '../../game/structs/Word';
import { NewGameClientToServerEvents, NewGameServerToClientEvents } from '../network/GameNetworkTypes';
import { AddedChar, Deleted, UpdatedAnswerKnowledge } from '../network/updates/Updates';
declare enum State {
    WaitingForKnowledge = 0,
    CanSubmit = 1
}
export declare class PlayerBoard implements NewGameClientToServerEvents, NewGameServerToClientEvents {
    private view;
    constructor(view?: GameView | null);
    AddedChar(update: AddedChar): void;
    Deleted(): void;
    state: State;
    guesses: Word[];
    currentGuess: string;
    secret: Word | null;
    AddChar(char: string): AddedChar | null;
    Delete(): Deleted | null;
    OpponentAddedChar(): void;
    OpponentDeleted(): void;
    UpdatedAnswerKnowledge(update: UpdatedAnswerKnowledge): void;
}
export {};
