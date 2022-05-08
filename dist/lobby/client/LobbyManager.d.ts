import { LobbyServerRequests } from '../server/LobbyNetworkTypes';
import { ClientSocket } from '../../public/ClientNetworking';
import { PlayerState } from '../../public/PlayerState';
export declare class NewLobbyManager extends PlayerState implements LobbyServerRequests {
    protected Register(socket: ClientSocket): void;
    protected Deregister(socket: ClientSocket): void;
    private view;
    private model;
    constructor();
    JoinLobby(lobbyId: string): void;
    FindMatch(): void;
    ShowMenu(): void;
}
