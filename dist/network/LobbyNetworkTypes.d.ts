import { Socket as ServerSocket } from 'socket.io';
import { Socket as ClientSocket } from 'socket.io-client';
import { InterServerEvents, SocketData } from './NetworkTypes';
import { LobbyId } from '../structs/LobbyId';
export declare type LobbyClientSocket = ClientSocket<LobbyUpdates, LobbyActions>;
export declare type LobbyServerSocket = ServerSocket<LobbyActions, LobbyUpdates, InterServerEvents, SocketData>;
export declare function RegisterLobbyClient(socket: LobbyClientSocket, client: LobbyUpdates): void;
export declare function DeregisterLobbyClient(socket: LobbyClientSocket): void;
export declare function RegisterLobbyServer(socket: LobbyServerSocket, server: LobbyActions): void;
export declare function DeregisterLobbyServer(socket: LobbyServerSocket): void;
export interface LobbyUpdates {
    EnterMenu: (lobbyId: LobbyId) => void;
    MatchFound: (lobbyId: LobbyId) => void;
    GameReady: () => void;
    FindingMatch: () => void;
    RematchRequested: () => void;
}
export interface LobbyActions {
    RequestLobbyId: () => void;
    JoinLobby: (lobbyId: LobbyId) => void;
    FindMatch: () => void;
    RequestRematch: () => void;
    DeclineRematch: () => void;
}
