import { Socket as ServerSocket } from 'socket.io';
import { Socket as ClientSocket } from 'socket.io-client';
import { InterServerEvents, SocketData } from '../../NetworkTypes';
import { LobbyId } from '../LobbyId';
export declare type LobbyClientSocket = ClientSocket<LobbyClientRequests, LobbyServerRequests>;
export declare type LobbyServerSocket = ServerSocket<LobbyServerRequests, LobbyClientRequests, InterServerEvents, SocketData>;
export interface LobbyClientRequests {
    EnterMenu: (lobbyId: LobbyId) => void;
    MatchFound: (lobbyId: LobbyId) => void;
    FindingMatch: () => void;
}
export interface LobbyServerRequests {
    RequestLobbyId: () => void;
    JoinLobby: (lobbyId: LobbyId) => void;
    FindMatch: () => void;
}
