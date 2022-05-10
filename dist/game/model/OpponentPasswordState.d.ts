import { TargetProgress } from '../client/structs/TargetProgress';
import { LetterAnimation } from './view/struct/Animation';
export declare class OpponentPasswordState {
    private password;
    private state;
    private view;
    constructor(hasView: boolean);
    Exit(): void;
    Reset(): void;
    Update(progress: TargetProgress): LetterAnimation[];
    Won(): boolean;
}
