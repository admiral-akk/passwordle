import { HintUpdate } from '../HintUpdate';
import { Subview } from './Subview';
export declare class AnswerView extends Subview {
    private answer;
    constructor(base: HTMLElement);
    SetSecret(secret: string): void;
    HintUpdate(update: HintUpdate): void;
}
