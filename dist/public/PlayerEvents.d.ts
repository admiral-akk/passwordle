import { Socket as ServerSocket } from 'socket.io';
import { Socket as ClientSocket } from 'socket.io-client';
import { InterServerEvents, SocketData } from '../NetworkTypes';
export declare type PlayerClientSocket = ClientSocket<PlayerServerToClientRequests, PlayerClientToServerRequests>;
export declare type StartServerSocket = ServerSocket<PlayerClientToServerRequests, PlayerServerToClientRequests, InterServerEvents, SocketData>;
export interface PlayerServerToClientRequests {
    OpenLobby: (lobbyId: string) => void;
}
export interface PlayerClientToServerRequests {
}
