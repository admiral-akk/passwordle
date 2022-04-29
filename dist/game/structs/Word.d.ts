declare const validWord: unique symbol;
export declare type Word = string & {
    [validWord]: true;
};
export declare function ToWord(s: string): Word;
export {};
