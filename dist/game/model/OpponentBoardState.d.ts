import { WordKnowledge } from '../../structs/WordKnowledge';
import { OpponentBoardView } from './view/OpponentBoardView';
import { LetterAnimation } from './view/struct/Animation';
import { ModelState } from './ModelState';
export declare class OpponentBoardState extends ModelState<OpponentBoardView> {
    private guesses;
    private opponentCharCount;
    private state;
    Reset(): void;
    OpponentAddedChar(): void;
    OpponentDeleted(): void;
    OpponentLockedGuess(): void;
    Submitted(): boolean;
    Update(knowledge: WordKnowledge): LetterAnimation[];
}
