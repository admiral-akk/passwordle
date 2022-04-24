import { LetterState } from './letter_state.js';
export declare class Board {
    private _letterBoxes;
    constructor(guessCount: number, wordLength: number);
    Update(priorGuesses: string[], currentGuess: string, knowledge: LetterState[][]): void;
}
