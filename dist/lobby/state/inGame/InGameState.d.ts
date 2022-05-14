import { LobbyState } from '../../../client/PlayerState';
import { LobbyClientSocket } from '../../../network/LobbyNetworkTypes';
export declare class InGameState extends LobbyState {
    Exit(): Promise<void>;
    private modal;
    protected Enter(): void;
    protected Register(socket: LobbyClientSocket): void;
    protected Deregister(socket: LobbyClientSocket): void;
    constructor();
}
