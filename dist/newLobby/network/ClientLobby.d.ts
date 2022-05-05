import { LobbyClientSocket, NewLobbyServerToClientEvents } from './LobbyNetworkTypes';
export declare class ClientLobby implements NewLobbyServerToClientEvents {
    private socket;
    private lobby;
    constructor(socket: LobbyClientSocket);
    LobbyCreated(lobbyId: string): void;
    MatchFound(lobbyId: string): void;
}
