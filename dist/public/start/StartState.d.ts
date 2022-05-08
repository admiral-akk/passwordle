import { ClientSocket } from '../ClientNetworking';
import { PlayerState } from '../PlayerState';
export declare class StartState extends PlayerState {
    protected Register(socket: ClientSocket): void;
    protected Deregister(socket: ClientSocket): void;
}
