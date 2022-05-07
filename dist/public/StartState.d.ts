import { ExitState, PlayerState } from './Player';
export declare class StartState implements PlayerState {
    Enter(prevState: ExitState): void;
    Exit(): ExitState;
}
