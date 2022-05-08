import { TargetProgress } from '../../client/structs/TargetProgress';
export interface PasswordView {
    GetAnimations(guess: string, target: TargetProgress): ((() => void) | null)[];
}
