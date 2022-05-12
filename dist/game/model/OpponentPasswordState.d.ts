import { TargetProgress } from '../client/structs/TargetProgress';
import { ModelState } from './ModelState';
import { OpponentPasswordView } from './view/OpponentPasswordView';
import { LetterAnimation } from './view/struct/Animation';
export declare class OpponentPasswordState extends ModelState<OpponentPasswordView> {
    private password;
    private state;
    Update(progress: TargetProgress, playerGuess: string): LetterAnimation[];
    Won(): boolean;
}
