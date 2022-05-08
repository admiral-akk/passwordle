import { Word } from '../structs/Word';
import { BoardState } from '../model/BoardState';
export declare class YourBoardState extends BoardState {
    private guesses;
    private currentGuess;
    private state;
    private view;
    AttemptAddChar(char: string): boolean;
    AddChar(char: string): void;
    AttemptDelete(): boolean;
    Delete(): void;
    AttemptLockedGuess(): boolean;
    LockedGuess(): Word;
}
