import { WordKnowledge } from './knowledge';
export declare class Board {
    private _letterBoxes;
    private _guesses;
    private _knowledge;
    private _currentGuess;
    private _wordLength;
    constructor(guessCount: number, wordLength: number);
    private CurrentRow;
    private CurrentLetter;
    private LastLetter;
    AddChar(char: string): void;
    Delete(): void;
    Submit(): void;
    UpdateKnowledge(knowledge: WordKnowledge): void;
}
