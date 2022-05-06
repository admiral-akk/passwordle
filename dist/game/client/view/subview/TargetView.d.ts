import { Subview } from './Subview';
export declare class TargetView extends Subview {
    private answer;
    constructor(base: HTMLElement);
    UpdateProgress(charIndex: number, char: string): void;
    Reset(): void;
}
