import { WordKnowledge } from '../../structs/WordKnowledge';
import { CharUpdate } from '../CharUpdate';
import { Subview } from './Subview';
import { BaseWordView } from './word/WordView';
export declare class PlayerBoardView extends Subview {
    Reset(): void;
    protected words: PlayerWordView[];
    constructor(base: HTMLDivElement, explanationText?: string);
    AddGuessKnowledge(wordIndex: number, knowledge: WordKnowledge): void;
    CharUpdate(update: CharUpdate): void;
}
declare class PlayerWordView extends BaseWordView {
    AddChar(char: string, index: number): void;
    SetKnowledge(knowledge: WordKnowledge): void;
}
export {};
