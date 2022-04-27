import { WordKnowledge } from './Knowledge';
import { Move } from './Move';
export declare class AnnotatedMove {
    move: Move;
    knowledge: WordKnowledge;
    constructor(move: Move, knowledge: WordKnowledge);
}
