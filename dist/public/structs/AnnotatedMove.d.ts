import { WordKnowledge } from '../knowledge';
import { NewMove } from './Move';
export declare class AnnotatedMove {
    move: NewMove;
    knowledge: WordKnowledge;
    constructor(move: NewMove, knowledge: WordKnowledge);
}
