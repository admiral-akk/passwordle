import { WordKnowledge } from '../client/structs/WordKnowledge';
import { LetterAnimation } from './view/struct/Animation';
export declare class OpponentBoardState {
    private guesses;
    private opponentCharCount;
    private view;
    constructor(hasView: boolean);
    OpponentAddedChar(): void;
    OpponentDeleted(): void;
    OpponentLockedGuess(): void;
    Update(knowledge: WordKnowledge): LetterAnimation[];
    Exit(): void;
    Reset(): void;
}
