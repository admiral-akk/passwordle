/// <reference types="express-serve-static-core" />
import { Server } from 'socket.io';
import { GameServerToClientEvents } from './game/client/GameNetworkEvents';
import { GameServer } from './game/GameServer';
import { LobbyClientToServerEvents, LobbyServerToClientEvents } from './lobby/client/LobbyNetworkEvents';
import { LobbyServer } from './lobby/LobbyServer';
import { LobbySocketData } from './lobby/LobbyServerSocket';
import { LobbyServerManager } from './LobbyServerManager';
export interface ServerToClientEvents extends LobbyServerToClientEvents, GameServerToClientEvents {
}
export interface ClientToServerEvents extends LobbyClientToServerEvents, GameServerToClientEvents {
}
export interface InterServerEvents {
    HandoffLobby: (lobby: LobbyServer) => void;
}
export interface SocketData extends LobbySocketData {
    name: string;
    playerIndex: number;
}
export declare function GetServer(app: Express.Application, lobbyServer: LobbyServerManager): Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>;
export declare function LobbyToGame(lobby: LobbyServer): GameServer;
export declare function GameToLobby(game: GameServer): LobbyServer;
