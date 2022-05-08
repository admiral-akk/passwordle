import { Word } from '../structs/Word';
export declare class YourBoardState {
    private guesses;
    private currentGuess;
    private state;
    private view;
    constructor(hasView: boolean);
    AddChar(char: string): boolean;
    Delete(): boolean;
    LockedGuess(): Word | null;
    Exit(): void;
    Reset(): void;
}
