import { GameView } from '../../game/client/view/GameView';
import { Word } from '../../game/structs/Word';
import { AddedChar, UpdatedAnswerKnowledge } from '../network/updates/Updates';
declare enum State {
    WaitingForKnowledge = 0,
    CanSubmit = 1
}
export declare class PlayerBoard {
    private view;
    constructor(view?: GameView | null);
    state: State;
    guesses: Word[];
    currentGuess: string;
    AddChar(char: string): AddedChar;
    OpponentAddedChar(): void;
    UpdatedAnswerKnowledge(update: UpdatedAnswerKnowledge): void;
}
export {};
