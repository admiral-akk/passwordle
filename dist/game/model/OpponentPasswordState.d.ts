import { TargetProgress } from '../client/structs/TargetProgress';
export declare class OpponentPasswordState {
    private password;
    private state;
    private view;
    constructor(hasView: boolean);
    Exit(): void;
    Reset(): void;
    Update(progress: TargetProgress): void;
}
