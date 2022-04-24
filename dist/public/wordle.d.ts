import { LetterState } from './letter_state.js';
export declare class Wordle {
    guesses: string[];
    states: LetterState[][];
    currentGuess: string;
    private _answer;
    constructor();
    InitStates(): LetterState[][];
    AddChar(c: string): void;
    Delete(): void;
    Submit(): void;
    WordLength(): number;
    TotalGuesses(): number;
}
