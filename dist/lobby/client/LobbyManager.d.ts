import { LobbyServerRequests, LobbyClientSocket } from '../server/LobbyNetworkTypes';
export declare class NewLobbyManager implements LobbyServerRequests {
    private socket;
    private view;
    private model;
    constructor(socket: LobbyClientSocket);
    JoinLobby(lobbyId: string): void;
    FindMatch(): void;
    ShowMenu(): void;
}
