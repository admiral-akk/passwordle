import { Socket } from 'socket.io';
import { LobbyClientToServerEvents, LobbyServerToClientEvents } from './client/LobbyNetworkEvents';
import { InterServerEvents, SocketData } from '../ServerNetworkTypes';
export declare type LobbyServerSocket = Socket<LobbyClientToServerEvents, LobbyServerToClientEvents, InterServerEvents, SocketData>;
