import { TargetProgress } from '../../../game/client/structs/TargetProgress';
import { WordKnowledge } from '../../../game/client/structs/WordKnowledge';
import { Word } from '../../../game/structs/Word';
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
    constructor(playerKnowledge: WordKnowledge, opponentKnowledge: WordKnowledge, playerProgress: TargetProgress, opponentProgress: TargetProgress);
}
export declare class LockedGuess {
    guess: Word;
    constructor(guess: Word);
}
export declare function Gameover(update: UpdatedAnswerKnowledge): boolean;
export declare function Tie(update: UpdatedAnswerKnowledge): boolean;
export declare function Win(update: UpdatedAnswerKnowledge): boolean;
export declare function Loss(update: UpdatedAnswerKnowledge): boolean;
