import { TargetProgress } from '../../client/structs/TargetProgress';
import { LetterAnimation } from './struct/Animation';
import { Subview } from './Subview';
export declare class YourPasswordView extends Subview {
    private answer;
    constructor(base: HTMLElement);
    SetSecret(secret: string): void;
    Update(target: TargetProgress, playerGuess: string): LetterAnimation[];
    GetAnimations(guess: string, target: TargetProgress): ((() => void) | null)[];
}
