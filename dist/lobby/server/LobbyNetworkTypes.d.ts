import { Socket as ServerSocket } from 'socket.io';
import { Socket as ClientSocket } from 'socket.io-client';
import { InterServerEvents, SocketData } from '../../NetworkTypes';
export declare type LobbyClientSocket = ClientSocket<LobbyClientRequests, LobbyServerRequests>;
export declare type LobbyServerSocket = ServerSocket<LobbyServerRequests, LobbyClientRequests, InterServerEvents, SocketData>;
export interface LobbyClientRequests {
    EnterMenu: (lobbyId: string) => void;
    MatchFound: (lobbyId: string) => void;
    GameEnded: () => void;
}
export interface LobbyServerRequests {
    FindMatch: () => void;
    JoinLobby: (lobbyId: string) => void;
}
