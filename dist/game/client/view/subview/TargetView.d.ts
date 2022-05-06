import { TargetProgress } from '../../structs/TargetProgress';
import { Subview } from './Subview';
export declare class TargetView extends Subview {
    private answer;
    constructor(base: HTMLElement);
    UpdateProgress(progress: TargetProgress): void;
    Reset(): void;
}
