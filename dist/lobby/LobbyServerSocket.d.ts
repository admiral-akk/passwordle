import { Socket } from 'socket.io';
import { InterServerEvents } from '../NetworkTypes';
import { LobbyClientToServerEvents, LobbyServerToClientEvents } from './client/LobbyNetworkEvents';
export interface LobbySocketData {
    isReady: boolean;
}
export declare type LobbyServerSocket = Socket<LobbyClientToServerEvents, LobbyServerToClientEvents, InterServerEvents, LobbySocketData>;
