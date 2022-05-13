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
export declare function RegisterStartClient(socket: StartClientSocket, client: ToClientStartEvents): void;
export declare function DeregisterStartClient(socket: StartClientSocket): void;
export declare function RegisterStartServer(socket: StartServerSocket, server: ToServerStartEvents): void;
export declare function DeregisterStartServer(socket: StartServerSocket): void;
