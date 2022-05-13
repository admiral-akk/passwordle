/// <reference types="express-serve-static-core" />
import { Server, Socket } from 'socket.io';
import { GameClientToServerEvents, GameServerToClientEvents } from './game/network/GameNetworkTypes';
import { LobbyClientRequests, LobbyServerRequests } from './lobby/server/LobbyNetworkTypes';
import { LobbyServer } from './lobby/server/LobbyServer';
import { PlayerId } from './structs/PlayerId';
import { StartClientRequests, StartServerRequests } from './public/start/StartEvents';
import { SocketManager } from './SocketManager';
export interface ServerToClientEvents extends GameServerToClientEvents, LobbyClientRequests, StartClientRequests {
}
export interface ClientToServerEvents extends GameClientToServerEvents, LobbyServerRequests, StartServerRequests {
}
export interface InterServerEvents {
}
export interface SocketData {
    playerId: PlayerId;
}
export declare type ServerSocket = Socket<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>;
export declare function GetServer(app: Express.Application, socketManager: SocketManager, lobbyServer: LobbyServer): Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>;
