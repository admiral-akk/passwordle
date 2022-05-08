import { ClientSocket } from './ClientNetworking';
export declare abstract class PlayerState {
    protected socket: ClientSocket | null;
    private setState;
    protected SwitchState(nextState: PlayerState): void;
    protected abstract Enter(): void;
    protected abstract Exit(): void;
    protected abstract Register(socket: ClientSocket): void;
    protected abstract Deregister(socket: ClientSocket): void;
    constructor();
    Initialize(socket: ClientSocket, setState: (nextState: PlayerState) => void): void;
}