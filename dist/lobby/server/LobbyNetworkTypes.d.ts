import { Socket as ServerSocket } from 'socket.io';
import { Socket as ClientSocket } from 'socket.io-client';
import { InterServerEvents, SocketData } from '../../NetworkTypes';
import { LobbyId } from '../../structs/LobbyId';
export declare type LobbyClientSocket = ClientSocket<LobbyClientRequests, LobbyServerRequests>;
export declare type LobbyServerSocket = ServerSocket<LobbyServerRequests, LobbyClientRequests, InterServerEvents, SocketData>;
export interface LobbyClientRequests {
    EnterMenu: (lobbyId: LobbyId) => void;
    MatchFound: (lobbyId: LobbyId) => void;
    GameReady: () => void;
    FindingMatch: () => void;
}
export interface LobbyServerRequests {
    RequestLobbyId: () => void;
    JoinLobby: (lobbyId: LobbyId) => void;
    FindMatch: () => void;
    RequestRematch: () => void;
    DeclineRematch: () => void;
}
