import { Socket } from 'socket.io-client';
import { ServerToClientEvents, ClientToServerEvents } from '../NetworkTypes';
export declare function GetSocket(): Socket<ServerToClientEvents, ClientToServerEvents>;
