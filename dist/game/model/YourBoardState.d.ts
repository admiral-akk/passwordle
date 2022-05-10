import { WordKnowledge } from '../client/structs/WordKnowledge';
import { Word } from '../structs/Word';
import { LetterAnimation } from './view/struct/Animation';
export declare class YourBoardState {
    private guesses;
    private currentGuess;
    private state;
    private view;
    constructor(hasView: boolean);
    AddChar(char: string): boolean;
    Delete(): boolean;
    LockedGuess(): Word | null;
    Update(knowledge: WordKnowledge): LetterAnimation[];
    Exit(): void;
    Reset(): void;
}
