import { CharUpdate } from '../CharUpdate';
import { Subview } from './Subview';
export declare abstract class BoardView extends Subview {
    private words;
    constructor(base: HTMLDivElement);
    protected BaseUpdate(update: CharUpdate): void;
}
