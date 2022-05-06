import { TargetProgress } from '../../structs/TargetProgress';
import { PasswordView } from './PasswordView';
import { Subview } from './Subview';
export declare class YourPasswordView extends Subview implements PasswordView {
    private answer;
    constructor(base: HTMLElement);
    SetSecret(secret: string): void;
    Reset(): void;
    GetAnimations(guess: string, target: TargetProgress): ((() => void) | null)[];
}
