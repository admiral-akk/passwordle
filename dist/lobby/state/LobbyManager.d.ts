import { ClientSocket } from '../../public/ClientNetworking';
import { PlayerState } from '../../public/PlayerState';
export declare class LobbyManager extends PlayerState {
    Exit(): void;
    private state;
    protected Register(socket: ClientSocket): void;
    protected Deregister(socket: ClientSocket): void;
    constructor();
    private SetState;
    protected Enter(): void;
    GameReady(): void;
}
