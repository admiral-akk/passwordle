import { WordKnowledge } from '../../structs/WordKnowledge';
import { CharUpdate } from '../CharUpdate';
import { Subview } from './Subview';
export declare abstract class BoardView extends Subview {
    private words;
    constructor(base: HTMLDivElement, explanationText?: string);
    protected BaseUpdate(update: CharUpdate): void;
    protected BaseHintUpdate(knowledge: WordKnowledge, index: number): void;
    Reset(): void;
}
