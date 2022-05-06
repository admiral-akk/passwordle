import {Word} from '../../../structs/Word';
import {TargetProgress} from '../../structs/TargetProgress';

export interface PasswordView {
  GetAnimations(guess: string, target: TargetProgress): ((() => void) | null)[];
}
