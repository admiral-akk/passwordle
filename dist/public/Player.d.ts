export declare enum PlayerStateEnum {
    Start = 0,
    Lobby = 1,
    Game = 2
}
export declare class ExitState {
    prevState: PlayerStateEnum;
    constructor(prevState: PlayerStateEnum);
}
export interface PlayerState {
    Enter(prevState: ExitState): void;
    Exit(): ExitState;
}
export declare class Player {
    private state;
    private socket;
    constructor();
}
