import { ClientSocket } from '../ClientNetworking';
import { PlayerState } from '../PlayerState';
import { StartUpdates } from '../../network/StartNetworkTypes';
export declare class StartState extends PlayerState implements StartUpdates {
    protected Enter(): void;
    Exit(): Promise<void>;
    protected Register(socket: ClientSocket): void;
    protected Deregister(socket: ClientSocket): void;
    constructor(socket: ClientSocket, setState: (nextState: PlayerState) => void);
    ServerReady(): void;
}
