import { ClientSocket } from '../ClientNetworking';
import { PlayerState } from '../PlayerState';
import { ToClientStartEvents } from '../../network/StartNetworkTypes';
export declare class StartState extends PlayerState implements ToClientStartEvents {
    protected Enter(): void;
    Exit(): Promise<void>;
    protected Register(socket: ClientSocket): void;
    protected Deregister(socket: ClientSocket): void;
    constructor(socket: ClientSocket, setState: (nextState: PlayerState) => void);
    ServerReady(): void;
}
