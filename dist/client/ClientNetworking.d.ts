import { Socket } from 'socket.io-client';
import { Updates, Actions } from '../network/NetworkTypes';
export declare type ClientSocket = Socket<Updates, Actions>;
export declare function GetSocket(): ClientSocket;
