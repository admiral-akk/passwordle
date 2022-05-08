import { LobbyClientRequests, LobbyServerRequests } from '../server/LobbyNetworkTypes';
import { ClientSocket } from '../../public/ClientNetworking';
import { PlayerState } from '../../public/PlayerState';
import { LobbyId } from '../LobbyId';
export declare class LobbyManager extends PlayerState implements LobbyServerRequests, LobbyClientRequests {
    protected Register(socket: ClientSocket): void;
    protected Deregister(socket: ClientSocket): void;
    private view;
    private model;
    constructor();
    protected Enter(): void;
    protected Exit(): void;
    RequestLobbyId(): void;
    EnterMenu(lobbyId: LobbyId): void;
    MatchFound(lobbyId: LobbyId): void;
    JoinLobby(lobbyId: LobbyId): void;
    FindMatch(): void;
    FindingMatch(): void;
    ShowMenu(): void;
}
