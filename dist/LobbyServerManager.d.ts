import { LobbyServer } from './lobby/LobbyServer';
import { LobbyServerSocket } from './lobby/LobbyServerSocket';
export declare class LobbyServerManager {
    private lobbies;
    private matchmakingLobbyIds;
    private handoffLobby;
    constructor(handoffLobby: (lobby: LobbyServer) => void);
    CreatePrivateLobby(socket: LobbyServerSocket): void;
    EnterMatchmaking(socket: LobbyServerSocket): void;
    JoinPrivateLobby(socket: LobbyServerSocket, lobbyId: string): void;
    AddSocket(socket: LobbyServerSocket): void;
    private RegisterLobbyHandlers;
    private Connect;
}
