export declare class OpponentBoardState {
    private guesses;
    private opponentCharCount;
    private view;
    constructor(hasView: boolean);
    OpponentAddedChar(): void;
    OpponentDeleted(): void;
    OpponentLockedGuess(): void;
    Exit(): void;
    Reset(): void;
}
