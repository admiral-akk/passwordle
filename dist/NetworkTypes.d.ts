/// <reference types="express-serve-static-core" />
import { Server, Socket } from 'socket.io';
import { GameServerToClientEvents } from './game/client/GameNetworkEvents';
import { LobbyClientToServerEvents, LobbyServerToClientEvents } from './lobby/client/LobbyNetworkEvents';
import { Lobby } from './lobby/Lobby';
import { LobbyServer } from './lobby/LobbyServer';
export interface ServerToClientEvents extends LobbyServerToClientEvents, GameServerToClientEvents {
}
export interface ClientToServerEvents extends LobbyClientToServerEvents, GameServerToClientEvents {
}
export interface InterServerEvents {
    HandoffLobby: (lobby: Lobby) => void;
}
export interface SocketData {
    name: string;
}
export declare type GlobalServer = Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>;
export declare type GlobalServerSocket = Socket<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>;
export declare function GetServer(app: Express.Application, lobbyServer: LobbyServer): Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>;
