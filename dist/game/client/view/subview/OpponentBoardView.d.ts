import { LetterState } from '../../structs/LetterState';
import { OpponentUpdate, OpponentUpdateType } from '../OpponentUpdate';
import { BoardView } from './BoardView';
import { Subview } from './Subview';
import { BaseWordView } from './word/WordView';
export declare class OpponentBoardView extends Subview implements BoardView {
    protected words: OpponentWordView[];
    constructor();
    SetCharKnowledge(wordIndex: number, charIndex: number, char: string, knowledge: LetterState): void;
    OpponentUpdate(update: OpponentUpdate): void;
    Reset(): void;
}
declare class OpponentWordView extends BaseWordView {
    OpponentUpdate(type: OpponentUpdateType, charIndex: number): void;
    SetKnowledge(charIndex: number, char: string, knowledge: LetterState): void;
}
export {};
