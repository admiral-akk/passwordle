import { Socket } from 'socket.io-client';
import { ToClientEvents, ToServerEvents } from '../network/NetworkTypes';
export declare type ClientSocket = Socket<ToClientEvents, ToServerEvents>;
export declare function GetSocket(): ClientSocket;
