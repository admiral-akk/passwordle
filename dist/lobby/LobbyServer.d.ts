import { Socket } from 'socket.io';
import { LobbyClientToServerEvents, LobbyServerToClientEvents } from './client/LobbyNetworkEvents';
import { InterServerEvents, SocketData } from '../ServerNetworkTypes';
declare type LobbySocket = Socket<LobbyClientToServerEvents, LobbyServerToClientEvents, InterServerEvents, SocketData>;
export declare class LobbyServer {
    private privateLobby;
    private publicLobby;
    constructor();
    AddSocket(socket: LobbySocket): void;
    private RegisterLobbyHandlers;
}
export {};
