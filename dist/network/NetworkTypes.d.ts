/// <reference types="express-serve-static-core" />
import { Server, Socket } from 'socket.io';
import { ToServerGameEvents, ToClientGameEvents } from './GameNetworkTypes';
import { ToClientLobbyEvents, ToServerLobbyEvents } from './LobbyNetworkTypes';
import { LobbyServer } from '../lobby/server/LobbyServer';
import { PlayerId } from '../structs/PlayerId';
import { ToClientStartEvents, ToServerStartEvents } from './StartNetworkTypes';
import { SocketManager } from '../server/SocketManager';
export interface ToClientEvents extends ToClientGameEvents, ToClientLobbyEvents, ToClientStartEvents {
}
export interface ToServerEvents extends ToServerGameEvents, ToServerLobbyEvents, ToServerStartEvents {
}
export interface InterServerEvents {
}
export interface SocketData {
    playerId: PlayerId;
}
export declare type ServerSocket = Socket<ToServerEvents, ToClientEvents, InterServerEvents, SocketData>;
export declare function GetServer(app: Express.Application, socketManager: SocketManager, lobbyServer: LobbyServer): Server<ToServerEvents, ToClientEvents, InterServerEvents, SocketData>;
