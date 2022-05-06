import { LobbyServerRequests, NewLobbyClientSocket } from '../server/LobbyNetworkTypes';
export declare class NewLobbyManager implements LobbyServerRequests {
    private socket;
    private view;
    private model;
    constructor(socket: NewLobbyClientSocket);
    JoinLobby(lobbyId: string): void;
    FindMatch(): void;
}
