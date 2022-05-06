import { Subview } from './Subview';
export declare class AnswerView extends Subview {
    private answer;
    constructor(base: HTMLElement);
    SetSecret(secret: string): void;
    Reset(): void;
    UpdateProgress(charIndex: number): void;
}
