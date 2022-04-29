import { Lobby } from './Lobby';
import { LobbyServerSocket } from './LobbyServerSocket';
export declare class LobbyServer {
    private privateLobby;
    private publicLobby;
    private handoffLobby;
    constructor(handoffLobby: (lobby: Lobby) => void);
    AddSocket(socket: LobbyServerSocket): void;
    private RegisterLobbyHandlers;
}
