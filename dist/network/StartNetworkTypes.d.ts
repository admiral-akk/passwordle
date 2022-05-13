import { Socket as ServerSocket } from 'socket.io';
import { Socket as ClientSocket } from 'socket.io-client';
import { InterServerEvents, SocketData } from './NetworkTypes';
export declare type StartClientSocket = ClientSocket<ToClientStartEvents, ToServerStartEvents>;
export declare type StartServerSocket = ServerSocket<ToServerStartEvents, ToClientStartEvents, InterServerEvents, SocketData>;
export interface ToClientStartEvents {
    ServerReady: () => void;
}
export interface ToServerStartEvents {
    ClientReady: () => void;
}
