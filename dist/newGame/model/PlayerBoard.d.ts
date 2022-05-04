import { GameView } from '../../game/client/view/GameView';
import { Word } from '../../game/structs/Word';
import { AddedChar, UpdatedAnswerKnowledge } from '../network/updates/Updates';
declare enum State {
    None = 0,
    WaitingForKnowledge = 1,
    CanSubmit = 2
}
export declare class PlayerBoard {
    private view;
    constructor(view?: GameView | null);
    state: State;
    guesses: Word[];
    currentGuess: string;
    AddChar(char: string): AddedChar;
    OpponentAddedChar(): void;
    Ready(): void;
    IsReady(): boolean;
    UpdatedAnswerKnowledge(update: UpdatedAnswerKnowledge): void;
}
export {};
