import { Word } from '../../../game/structs/Word';
export declare class AddedChar {
    char: string;
    constructor(char: string);
}
export declare class Deleted {
}
export declare class UpdatedAnswerKnowledge {
    playerWord: Word;
    constructor(playerWord: Word);
}
export declare class Submitted {
    guess: Word;
    constructor(guess: Word);
}
