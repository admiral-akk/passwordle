import { WordKnowledge } from '../client/structs/WordKnowledge';
export declare class OpponentBoardState {
    private guesses;
    private opponentCharCount;
    private view;
    constructor(hasView: boolean);
    OpponentAddedChar(): void;
    OpponentDeleted(): void;
    OpponentLockedGuess(): void;
    Update(knowledge: WordKnowledge): void;
    Exit(): void;
    Reset(): void;
}
