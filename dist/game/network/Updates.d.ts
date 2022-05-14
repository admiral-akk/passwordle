import { EndGameState, EndGameSummary } from '../../structs/EndGameState';
import { TargetProgress } from '../../structs/TargetProgress';
import { Word } from '../../structs/Word';
import { WordKnowledge } from '../../structs/WordKnowledge';
export declare class AddedChar {
    char: string;
    constructor(char: string);
}
export declare class Deleted {
}
export declare class UpdatedAnswerKnowledge {
    playerKnowledge: WordKnowledge;
    opponentKnowledge: WordKnowledge;
    playerProgress: TargetProgress;
    opponentProgress: TargetProgress;
    endGameState?: EndGameSummary;
    constructor(playerKnowledge: WordKnowledge, opponentKnowledge: WordKnowledge, playerProgress: TargetProgress, opponentProgress: TargetProgress, playerPassword: Word, opponentPassword: Word);
}
export declare function IsGameOver(knowledge: UpdatedAnswerKnowledge): boolean;
export declare function GameOverState(knowledge: UpdatedAnswerKnowledge): EndGameState;
export declare class GuessLocked {
    index: number;
    constructor(index: number);
}
export declare class LockedGuess {
    guess: Word;
    constructor(guess: Word);
}
export declare enum ErrorType {
    None = 0,
    TooShort = 1,
    NotValidWord = 2
}
export declare class LockedGuessError {
    type: ErrorType;
    wordIndex: number;
    wordLength: number;
    constructor(type: ErrorType, wordIndex: number, wordLength: number);
}
