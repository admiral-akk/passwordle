import { TargetProgress } from '../../structs/TargetProgress';
import { ModelState } from './ModelState';
import { OpponentPasswordView } from './view/OpponentPasswordView';
import { LetterAnimation } from './view/struct/Animation';
export declare class OpponentPasswordState extends ModelState<OpponentPasswordView> {
    password: string[];
    Reset(): void;
    Update(progress: TargetProgress, playerGuess: string): LetterAnimation[];
    GetProgress(): TargetProgress;
    Won(): boolean;
}
