export declare enum OpponentUpdateType {
    AddChar = 0,
    Delete = 1,
    Submit = 2
}
export declare class OpponentUpdate {
    type: OpponentUpdateType;
    wordIndex: number;
    charIndex: number;
    constructor(type: OpponentUpdateType, wordIndex: number, charIndex: number);
}
