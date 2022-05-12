import { WordKnowledge } from '../client/structs/WordKnowledge';
import { OpponentBoardView } from './view/OpponentBoardView';
import { LetterAnimation } from './view/struct/Animation';
import { ModelState } from './ModelState';
export declare class OpponentBoardState extends ModelState<OpponentBoardView> {
    private guesses;
    private opponentCharCount;
    constructor(hasView: boolean);
    OpponentAddedChar(): void;
    OpponentDeleted(): void;
    OpponentLockedGuess(): void;
    Update(knowledge: WordKnowledge): LetterAnimation[];
}
