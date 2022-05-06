import { LetterView } from './letter/LetterView';
import { Subview } from '../Subview';
export declare abstract class BaseWordView extends Subview {
    protected letters: LetterView[];
    constructor(root: HTMLElement);
    Reset(): void;
}
