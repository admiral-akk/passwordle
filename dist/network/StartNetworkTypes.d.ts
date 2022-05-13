import { Socket as ServerSocket } from 'socket.io';
import { Socket as ClientSocket } from 'socket.io-client';
import { InterServerEvents, SocketData } from './NetworkTypes';
export declare type StartClientSocket = ClientSocket<StartUpdates, StartActions>;
export declare type StartServerSocket = ServerSocket<StartActions, StartUpdates, InterServerEvents, SocketData>;
export interface StartUpdates {
    ServerReady: () => void;
}
export interface StartActions {
    ClientReady: () => void;
}
export declare function RegisterStartClient(socket: StartClientSocket, client: StartUpdates): void;
export declare function DeregisterStartClient(socket: StartClientSocket): void;
export declare function RegisterStartServer(socket: StartServerSocket, server: StartActions): void;
export declare function DeregisterStartServer(socket: StartServerSocket): void;
