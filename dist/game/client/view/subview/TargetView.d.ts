import { HintUpdate } from '../HintUpdate';
import { Subview } from './Subview';
export declare class TargetView extends Subview {
    private answer;
    constructor(base: HTMLElement);
    HintUpdate(update: HintUpdate): void;
    Reset(): void;
}
