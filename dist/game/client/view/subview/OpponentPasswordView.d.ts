import { TargetProgress } from '../../structs/TargetProgress';
import { PasswordView } from './PasswordView';
import { Subview } from './Subview';
export declare class OpponentPasswordView extends Subview implements PasswordView {
    private answer;
    constructor();
    GetAnimations(guess: string, target: TargetProgress): ((() => void) | null)[];
    Reset(): void;
}
