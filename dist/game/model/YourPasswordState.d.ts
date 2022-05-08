import { TargetProgress } from '../client/structs/TargetProgress';
import { Word } from '../structs/Word';
export declare class YourPasswordState {
    private password;
    private state;
    private view;
    constructor(hasView: boolean);
    SetPassword(password: Word): void;
    Exit(): void;
    Reset(): void;
    Update(target: TargetProgress): void;
}
