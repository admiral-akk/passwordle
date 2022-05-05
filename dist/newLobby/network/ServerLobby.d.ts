import { LobbyServerSocket } from './LobbyNetworkTypes';
export declare class ServerLobby {
    private lobbies;
    private publicLobbies;
    constructor();
    PlayerJoins(socket: LobbyServerSocket): void;
    private RequestMainMenu;
    private StartMatchmaking;
    private ReturnToMainMenu;
}
