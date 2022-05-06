import { TargetProgress } from '../../structs/TargetProgress';
import { PasswordView } from './PasswordView';
import { Subview } from './Subview';
export declare class TargetView extends Subview implements PasswordView {
    private answer;
    constructor(base: HTMLElement);
    GetAnimations(guess: string, target: TargetProgress): ((() => void) | null)[];
    Reset(): void;
}
