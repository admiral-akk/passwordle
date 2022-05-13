import { TargetProgress } from './TargetProgress';
import { WordKnowledge } from './WordKnowledge';
export declare class Hint {
    playerGuess: WordKnowledge;
    opponentGuess: WordKnowledge;
    opponentProgress: TargetProgress;
    playerProgress: TargetProgress;
    constructor(playerGuess: WordKnowledge, opponentGuess: WordKnowledge, playerProgress: TargetProgress, opponentProgress: TargetProgress);
}
