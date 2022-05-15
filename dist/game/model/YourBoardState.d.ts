import { WordKnowledge } from '../../structs/WordKnowledge';
import { YourBoardView } from './view/YourBoardView';
import { Word } from '../../structs/Word';
import { LetterAnimation } from './view/struct/Animation';
import { ModelState } from './ModelState';
export declare class YourBoardState extends ModelState<YourBoardView> {
    Reset(): void;
    guesses: Word[];
    currentGuess: string;
    private state;
    CanAddChar(): boolean;
    CanDelete(): boolean;
    CanSubmit(): boolean;
    AddChar(char: string): boolean;
    Delete(): boolean;
    LockedGuess(opponentSubmitted: boolean): Word;
    Update(knowledge: WordKnowledge): LetterAnimation[];
    CurrentGuessLength(): number;
    GuessCount(): number;
    LatestGuess(): Word;
}
