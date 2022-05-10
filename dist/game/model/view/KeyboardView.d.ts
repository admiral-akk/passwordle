import { LetterState } from '../../client/structs/LetterState';
import { Subview } from './Subview';
export declare class KeyboardView extends Subview {
    constructor();
    private keys;
    Initialize(input: (key: string) => void): void;
    SetColor(key: string, state: LetterState): void;
    Reset(): void;
}
