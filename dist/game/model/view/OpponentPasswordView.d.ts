import { TargetProgress } from '../../client/structs/TargetProgress';
import { LetterAnimation } from './struct/Animation';
import { Subview } from './Subview';
export declare class OpponentPasswordView extends Subview {
    private answer;
    constructor();
    Update(target: TargetProgress, playerGuess: string): LetterAnimation[];
    GetAnimations(guess: string, target: TargetProgress): ((() => void) | null)[];
    Reset(): void;
}
