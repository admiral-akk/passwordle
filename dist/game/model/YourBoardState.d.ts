import { WordKnowledge } from '../client/structs/WordKnowledge';
import { YourBoardView } from './view/YourBoardView';
import { Word } from '../structs/Word';
import { LetterAnimation } from './view/struct/Animation';
import { ModelState } from './ModelState';
export declare class YourBoardState extends ModelState<YourBoardView> {
    private guesses;
    private currentGuess;
    private state;
    AddChar(char: string): boolean;
    Delete(): boolean;
    LockedGuess(): Word | null;
    Update(knowledge: WordKnowledge): LetterAnimation[];
    CurrentGuessLength(): number;
    GuessCount(): number;
}
