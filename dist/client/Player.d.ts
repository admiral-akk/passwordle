import { PlayerState } from './PlayerState';
export declare class Player {
    private socket;
    private state;
    constructor();
    SetState(nextState: PlayerState): void;
}
