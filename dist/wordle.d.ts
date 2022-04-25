import { LetterState } from './letter_state.js';
export declare class Wordle {
    guesses: string[];
    states: LetterState[][];
    currentGuess: string;
    private _answer;
    keyboardStates: Record<string, LetterState>;
    constructor();
    InitStates(): LetterState[][];
    InitKeyboardStates(): Record<string, LetterState>;
    AddChar(char: string): void;
    Delete(): void;
    UpdateKeyboardKnowledge(states: LetterState[], guess: string): void;
    Submit(): void;
    WordLength(): number;
    TotalGuesses(): number;
}
