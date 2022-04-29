import { CharUpdate } from '../../CharUpdate';
import { Subview } from '../Subview';
export declare class LetterView extends Subview {
    constructor(base: HTMLElement);
    Update(update: CharUpdate): void;
    Set(char: string): void;
}
