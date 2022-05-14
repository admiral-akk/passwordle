import { GuessLocked, LockedGuessError } from '../../network/Updates';
import { LetterState } from '../../../structs/LetterState';
import { CharUpdate } from '../CharUpdate';
import { Subview } from './Subview';
import { BaseWordView } from './word/WordView';
export declare class YourBoardView extends Subview {
    protected words: PlayerWordView[];
    constructor(base: HTMLElement);
    SetCharKnowledge(wordIndex: number, charIndex: number, char: string, knowledge: LetterState): void;
    CharUpdate(update: CharUpdate): void;
    SubmitError(error: LockedGuessError): void;
    GuessLocked(update: GuessLocked): void;
}
declare class PlayerWordView extends BaseWordView {
    AddChar(char: string, index: number): void;
    SetKnowledge(charIndex: number, char: string, knowledge: LetterState): void;
    GuessLocked(): void;
}
export {};
