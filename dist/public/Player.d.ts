import { ClientSocket } from './ClientNetworking';
export declare abstract class PlayerState {
    protected socket: ClientSocket;
    private SetState;
    protected Exit(nextState: PlayerState): void;
    protected abstract Register(socket: ClientSocket): void;
    protected abstract Deregister(socket: ClientSocket): void;
    constructor(socket: ClientSocket, SetState: (nextState: PlayerState) => void);
}
export declare class Player {
    private socket;
    private state;
    constructor();
    SetState(nextState: PlayerState): void;
}
