import { WordKnowledge } from '../../structs/WordKnowledge';
import { HintUpdate } from '../HintUpdate';
import { OpponentUpdate, OpponentUpdateType } from '../OpponentUpdate';
import { Subview } from './Subview';
import { BaseWordView } from './word/WordView';
export declare class OpponentBoardView extends Subview {
    protected words: OpponentWordView[];
    constructor(base: HTMLDivElement, explanationText?: string);
    OpponentUpdate(update: OpponentUpdate): void;
    Reset(): void;
    HintUpdate(update: HintUpdate): void;
}
declare class OpponentWordView extends BaseWordView {
    OpponentUpdate(type: OpponentUpdateType, charIndex: number): void;
    SetKnowledge(knowledge: WordKnowledge): void;
}
export {};
