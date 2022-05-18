export declare class AnnotatedWord {
    word: string;
    annotation: Knowledge[];
    constructor(word: string, annotation?: Knowledge[]);
}
export declare enum Knowledge {
    None = 0,
    NotInWord = 1,
    WrongPosition = 2,
    Correct = 3
}
