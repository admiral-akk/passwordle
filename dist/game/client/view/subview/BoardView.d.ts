import { CharUpdate } from '../CharUpdate';
import { HintUpdate } from '../HintUpdate';
import { Subview } from './Subview';
export declare abstract class BoardView extends Subview {
    private words;
    constructor(base: HTMLDivElement);
    protected BaseUpdate(update: CharUpdate): void;
    protected BaseHintUpdate(update: HintUpdate): void;
}
