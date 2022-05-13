import { Socket } from 'socket.io-client';
import { ServerToClientEvents, ClientToServerEvents } from '../network/NetworkTypes';
export declare type ClientSocket = Socket<ServerToClientEvents, ClientToServerEvents>;
export declare function GetSocket(): ClientSocket;
