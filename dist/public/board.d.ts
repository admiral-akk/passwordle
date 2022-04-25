import { WordKnowledge } from './knowledge';
export declare class Board {
    private _letterBoxes;
    private _guesses;
    private _knowledge;
    private _currentGuess;
    private _wordLength;
    constructor(guessCount: number, wordLength: number);
    private NewGame;
    private PreviousRow;
    private CurrentRow;
    private CurrentLetter;
    private LastLetter;
    AddChar(char: string): void;
    Delete(): void;
    Submit(): void;
    private UpdateColor;
    UpdateKnowledge(knowledge: WordKnowledge): void;
}
