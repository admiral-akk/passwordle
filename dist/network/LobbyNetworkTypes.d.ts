import { Socket as ServerSocket } from 'socket.io';
import { Socket as ClientSocket } from 'socket.io-client';
import { InterServerEvents, SocketData } from './NetworkTypes';
import { LobbyId } from '../structs/LobbyId';
export declare type LobbyClientSocket = ClientSocket<ToClientLobbyEvents, ToServerLobbyEvents>;
export declare type LobbyServerSocket = ServerSocket<ToServerLobbyEvents, ToClientLobbyEvents, InterServerEvents, SocketData>;
export interface ToClientLobbyEvents {
    EnterMenu: (lobbyId: LobbyId) => void;
    MatchFound: (lobbyId: LobbyId) => void;
    GameReady: () => void;
    FindingMatch: () => void;
}
export interface ToServerLobbyEvents {
    RequestLobbyId: () => void;
    JoinLobby: (lobbyId: LobbyId) => void;
    FindMatch: () => void;
    RequestRematch: () => void;
    DeclineRematch: () => void;
}
