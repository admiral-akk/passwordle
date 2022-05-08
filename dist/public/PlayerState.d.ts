import { LobbyClientSocket } from '../lobby/server/LobbyNetworkTypes';
import { ClientSocket } from './ClientNetworking';
declare abstract class State<SocketType> {
    protected socket: SocketType | null;
    private setState;
    protected SwitchState(nextState: State<SocketType>): void;
    protected abstract Enter(): void;
    abstract Exit(): void;
    protected abstract Register(socket: SocketType): void;
    protected abstract Deregister(socket: SocketType): void;
    constructor();
    Initialize(socket: SocketType, setState: (nextState: State<SocketType>) => void): void;
}
export declare abstract class PlayerState extends State<ClientSocket> {
}
export declare abstract class LobbyState extends State<LobbyClientSocket> {
}
export {};
