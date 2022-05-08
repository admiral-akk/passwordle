import { Socket as ServerSocket } from 'socket.io';
import { Socket as ClientSocket } from 'socket.io-client';
import { InterServerEvents, SocketData } from '../../NetworkTypes';
export declare type StartClientSocket = ClientSocket<StartServerToClientRequests, StartClientToServerRequests>;
export declare type StartServerSocket = ServerSocket<StartClientToServerRequests, StartServerToClientRequests, InterServerEvents, SocketData>;
export interface StartServerToClientRequests {
}
export interface StartClientToServerRequests {
    LoadLobby: () => void;
}
