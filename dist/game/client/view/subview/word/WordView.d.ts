import { Subview } from '../Subview';
import { CharUpdate } from '../../CharUpdate';
import { WordKnowledge } from '../../../../logic/Knowledge';
export declare class WordView extends Subview {
    private letters;
    constructor(root: HTMLElement);
    Set(word: string): void;
    SetKnowledge(knowledge: WordKnowledge): void;
    Update(update: CharUpdate): void;
    SetChar(char: string, charIndex: number): void;
}
