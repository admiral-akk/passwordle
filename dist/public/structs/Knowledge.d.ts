export declare enum LetterState {
    None = 0,
    Grey = 1,
    Yellow = 2,
    Green = 3
}
export declare class WordKnowledge {
    letterKnowledge: LetterState[];
    guess: string;
    constructor(letterKnowledge: LetterState[], guess: string);
}
