import { LetterState } from '../../client/structs/LetterState';
import { OpponentUpdate, OpponentUpdateType } from '../OpponentUpdate';
import { Subview } from './Subview';
import { BaseWordView } from './word/WordView';
export declare class OpponentBoardView extends Subview {
    protected words: OpponentWordView[];
    constructor();
    SetCharKnowledge(wordIndex: number, charIndex: number, char: string, knowledge: LetterState): void;
    OpponentUpdate(update: OpponentUpdate): void;
}
declare class OpponentWordView extends BaseWordView {
    OpponentUpdate(type: OpponentUpdateType, charIndex: number): void;
    SetKnowledge(charIndex: number, char: string, knowledge: LetterState): void;
}
export {};
