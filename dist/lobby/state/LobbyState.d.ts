import { LobbyClientSocket } from '../../network/LobbyNetworkTypes';
declare abstract class State<SocketType> {
    protected socket: SocketType | null;
    private setState?;
    protected SwitchState(nextState: State<SocketType>): void;
    protected abstract Enter(): void;
    abstract Exit(): Promise<void>;
    protected abstract Register(socket: SocketType): void;
    protected abstract Deregister(socket: SocketType): void;
    DeregisterSocket(): void;
    constructor();
    Initialize(socket: SocketType, setState: (nextState: State<SocketType>) => void): void;
}
export declare abstract class LobbyState extends State<LobbyClientSocket> {
}
export {};
