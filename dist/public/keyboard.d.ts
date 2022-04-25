import { LetterState } from './letter_state';
export declare class Keyboard {
    private registerKey;
    colorKey(key: HTMLButtonElement, state: LetterState): void;
    private keys;
    constructor();
    registerKeyboardEvents(): void;
}
