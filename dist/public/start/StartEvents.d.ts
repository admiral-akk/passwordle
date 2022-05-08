import { Socket as ServerSocket } from 'socket.io';
import { Socket as ClientSocket } from 'socket.io-client';
import { InterServerEvents, SocketData } from '../../NetworkTypes';
export declare type StartClientSocket = ClientSocket<StartClientRequests, StartServerRequests>;
export declare type LobbyServerSocket = ServerSocket<StartServerRequests, StartClientRequests, InterServerEvents, SocketData>;
export interface StartClientRequests {
    ServerReady: () => void;
}
export interface StartServerRequests {
    ClientReady: () => void;
}
