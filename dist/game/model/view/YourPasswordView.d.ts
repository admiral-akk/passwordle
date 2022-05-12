import { TargetProgress } from '../../client/structs/TargetProgress';
import { LetterAnimation } from './struct/Animation';
import { Subview } from './Subview';
export declare class YourPasswordView extends Subview {
    private answer;
    constructor();
    SetSecret(secret: string): void;
    Reset(): void;
    Update(target: TargetProgress, playerGuess: string): LetterAnimation[];
    GetAnimations(guess: string, target: TargetProgress): ((() => void) | null)[];
}
