import { WordKnowledge } from '../../logic/Knowledge';
export declare class HintUpdate {
    playerKnowledge: WordKnowledge;
    opponentKnowledge: WordKnowledge;
    guessIndex: number;
    constructor(playerKnowledge: WordKnowledge, opponentKnowledge: WordKnowledge, guessIndex: number);
}
