import { Socket } from 'socket.io-client';
import Actions, { Updates } from '../network/NetworkTypes';
export declare type ClientSocket = Socket<Updates, Actions>;
export declare function GetSocket(): ClientSocket;
