import { Word } from '../structs/Word';
export declare class YourBoardState {
    private guesses;
    private currentGuess;
    private state;
    private view;
    constructor(hasView: boolean);
    AttemptAddChar(char: string): boolean;
    AddChar(char: string): void;
    AttemptDelete(): boolean;
    Delete(): void;
    AttemptLockedGuess(): boolean;
    LockedGuess(): Word;
}
