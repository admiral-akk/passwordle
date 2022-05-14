import { LobbyState } from '../LobbyState';
import { LobbyId } from '../../../structs/LobbyId';
import { LobbyClientSocket } from '../../../network/LobbyNetworkTypes';
export declare class LoadingState extends LobbyState {
    private modal;
    private state;
    protected Enter(): void;
    Exit(): Promise<void>;
    protected Register(socket: LobbyClientSocket): void;
    protected Deregister(socket: LobbyClientSocket): void;
    constructor();
    EnterMenu(lobbyId: LobbyId): void;
    RequestLobbyId(): void;
    JoinLobby(lobbyId: LobbyId): void;
}
