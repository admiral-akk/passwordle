import { Subview } from '../Subview';
import { CharUpdate } from '../../CharUpdate';
export declare class WordView extends Subview {
    private letters;
    constructor(root: HTMLElement);
    Set(word: string): void;
    Update(update: CharUpdate): void;
    SetChar(char: string, charIndex: number): void;
}
