import { LockedGuessError } from '../../../network/updates/Updates';
import { LetterState } from '../../structs/LetterState';
import { CharUpdate } from '../CharUpdate';
import { BoardView } from './BoardView';
import { Subview } from './Subview';
import { BaseWordView } from './word/WordView';
export declare class YourBoardView extends Subview implements BoardView {
    Reset(): void;
    protected words: PlayerWordView[];
    constructor(base: HTMLElement, explanationText?: string);
    SetCharKnowledge(wordIndex: number, charIndex: number, char: string, knowledge: LetterState): void;
    CharUpdate(update: CharUpdate): void;
    SubmitError(error: LockedGuessError): void;
}
declare class PlayerWordView extends BaseWordView {
    AddChar(char: string, index: number): void;
    SetKnowledge(charIndex: number, char: string, knowledge: LetterState): void;
}
export {};
