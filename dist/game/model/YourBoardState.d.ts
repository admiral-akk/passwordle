import { WordKnowledge } from '../client/structs/WordKnowledge';
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
    Update(knowledge: WordKnowledge): void;
    Exit(): void;
    Reset(): void;
}
