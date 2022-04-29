import { WordKnowledge } from '../game/logic/Knowledge';
export declare class Board {
    private _letterBoxes;
    private _guessCount;
    private _currentGuess;
    private _wordLength;
    constructor(guessCount: number, wordLength: number);
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
