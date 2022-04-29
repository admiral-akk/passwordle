import { LobbyServerSocket } from './LobbyServerSocket';
export declare class LobbyServer {
    private privateLobby;
    private publicLobby;
    constructor();
    AddSocket(socket: LobbyServerSocket): void;
    private RegisterLobbyHandlers;
}
