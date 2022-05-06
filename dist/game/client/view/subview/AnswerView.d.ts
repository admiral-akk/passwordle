import { TargetProgress } from '../../structs/TargetProgress';
import { Subview } from './Subview';
export declare class AnswerView extends Subview {
    private answer;
    constructor(base: HTMLElement);
    SetSecret(secret: string): void;
    Reset(): void;
    UpdateProgress(progress: TargetProgress): void;
}
