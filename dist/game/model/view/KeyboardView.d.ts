import { LetterState } from '../../../structs/LetterState';
import { Subview } from './Subview';
export declare class KeyboardView extends Subview {
    constructor(base: HTMLElement);
    private keys;
    Initialize(input: (key: string) => void): void;
    SetColor(key: string, state: LetterState): void;
}
