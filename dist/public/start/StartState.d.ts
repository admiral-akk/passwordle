import { ClientSocket } from '../ClientNetworking';
import { PlayerState } from '../PlayerState';
import { StartClientRequests } from '../../network/StartNetworkTypes';
export declare class StartState extends PlayerState implements StartClientRequests {
    protected Enter(): void;
    Exit(): Promise<void>;
    protected Register(socket: ClientSocket): void;
    protected Deregister(socket: ClientSocket): void;
    constructor(socket: ClientSocket, setState: (nextState: PlayerState) => void);
    ServerReady(): void;
}
