import { WordKnowledge } from './knowledge';
export declare class Move {
    guess: string;
    knowledge: WordKnowledge;
    constructor(guess: string, knowledge: WordKnowledge);
}
export declare class History {
    history: Move[];
    constructor();
    Add(guess: string, knowledge: WordKnowledge): void;
}
