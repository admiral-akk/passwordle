import { Socket as ServerSocket } from 'socket.io';
import { Socket as ClientSocket } from 'socket.io-client';
import { InterServerEvents, SocketData } from '../../NetworkTypes';
export declare type LobbyClientSocket = ClientSocket<NewLobbyServerToClientEvents, NewLobbyClientToServerEvents>;
export declare type LobbyServerSocket = ServerSocket<NewLobbyClientToServerEvents, NewLobbyServerToClientEvents, InterServerEvents, SocketData>;
export interface NewLobbyServerToClientEvents {
    LobbyCreated: (lobbyId: string) => void;
    MatchFound: (lobbyId: string) => void;
}
export interface NewLobbyClientToServerEvents {
    RequestMainMenu: () => void;
    StartMatchmaking: () => void;
    ReturnToMainMenu: () => void;
    StartingGame: () => void;
}
