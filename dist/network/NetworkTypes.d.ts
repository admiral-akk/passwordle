/// <reference types="express-serve-static-core" />
import { Server, Socket as SSocket } from 'socket.io';
import { ToServerGameEvents, ToClientGameEvents } from './GameNetworkTypes';
import { ToClientLobbyEvents, ToServerLobbyEvents } from './LobbyNetworkTypes';
import { LobbyServer } from '../lobby/server/LobbyServer';
import { PlayerId } from '../structs/PlayerId';
import { ToClientStartEvents, ToServerStartEvents } from './StartNetworkTypes';
import { SocketManager } from '../server/SocketManager';
import { Socket as CSocket } from 'socket.io-client';
export interface ToClientEvents extends ToClientGameEvents, ToClientLobbyEvents, ToClientStartEvents {
}
export interface ToServerEvents extends ToServerGameEvents, ToServerLobbyEvents, ToServerStartEvents {
}
export interface InterServerEvents {
}
export interface SocketData {
    playerId: PlayerId;
}
export declare type ClientSocket = CSocket<ToClientEvents, ToServerEvents>;
export declare type ServerSocket = SSocket<ToServerEvents, ToClientEvents, InterServerEvents, SocketData>;
export declare function RegisterClient(socket: ClientSocket, client: ToClientEvents): void;
export declare function DeregisterClient(socket: ClientSocket): void;
export declare function RegisterServer(socket: ServerSocket, server: ToServerEvents): void;
export declare function DeregisterServer(socket: ServerSocket): void;
export declare function GetServer(app: Express.Application, socketManager: SocketManager, lobbyServer: LobbyServer): Server<ToServerEvents, ToClientEvents, InterServerEvents, SocketData>;
