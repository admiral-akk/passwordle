import { LetterView } from './letter/LetterView';
import { Subview } from '../Subview';
import { LockedGuessError } from '../../../network/updates/Updates';
export declare abstract class BaseWordView extends Subview {
    protected letters: LetterView[];
    constructor(root: HTMLElement);
    Reset(): void;
    LockedGuessError(error: LockedGuessError): void;
}
