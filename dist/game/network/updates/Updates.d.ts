import { EndGameState, EndGameSummary } from '../../../util/struct/EndGameState';
import { TargetProgress } from '../../client/structs/TargetProgress';
import { WordKnowledge } from '../../client/structs/WordKnowledge';
import { Word } from '../../structs/Word';
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
    endGameState: EndGameSummary | null;
    constructor(playerKnowledge: WordKnowledge, opponentKnowledge: WordKnowledge, playerProgress: TargetProgress, opponentProgress: TargetProgress, endGameState: EndGameSummary | null);
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
