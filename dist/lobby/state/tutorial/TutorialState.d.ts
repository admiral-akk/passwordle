import { LobbyClientSocket } from '../../../network/LobbyNetworkTypes';
import { LobbyId } from '../../../structs/LobbyId';
import { LobbyState } from '../LobbyState';
export declare class TutorialState extends LobbyState {
    private modal;
    protected Enter(): void;
    Exit(): Promise<void>;
    private lobbyId?;
    protected Register(socket: LobbyClientSocket): void;
    EnterMenu(lobbyId: LobbyId): void;
    RequestLobbyId(): void;
    JoinLobby(lobbyId: LobbyId): void;
    protected Deregister(socket: LobbyClientSocket): void;
}
