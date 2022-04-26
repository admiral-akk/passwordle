import { WordKnowledge } from './knowledge';
export declare class MultiBoard {
    private _you;
    private _opponent;
    constructor(guessCount: number, wordLength: number);
}
export declare class Board {
    private _letterBoxes;
    private _guessCount;
    private _currentGuess;
    private _wordLength;
    constructor(guessCount: number, wordLength: number, playerName: string);
    private GameHistory;
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
