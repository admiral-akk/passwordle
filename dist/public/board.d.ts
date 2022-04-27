import { WordKnowledge } from './knowledge';
export declare class MultiBoard {
    private _you;
    private _opponent;
    constructor(guessCount: number, wordLength: number);
}
export declare class Board {
    protected _letterBoxes: HTMLDivElement[][];
    protected _guessCount: number;
    protected _currentGuess: string;
    protected _wordLength: number;
    constructor(guessCount: number, wordLength: number);
    private GameHistory;
    private NewGame;
    private PreviousRow;
    private UpdateColor;
    UpdateKnowledge(knowledge: WordKnowledge): void;
}
export declare class PlayerBoard extends Board {
    private RegisterEventListeners;
    constructor(guessCount: number, wordLength: number);
    private CurrentRow;
    private CurrentLetter;
    private LastLetter;
    private AddChar;
    private Delete;
    private Submit;
}
export declare class OpponentBoard extends Board {
    constructor(guessCount: number, wordLength: number);
}
