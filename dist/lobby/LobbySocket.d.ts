import { Socket } from 'socket.io';
import { LobbyClientToServerEvents, LobbyServerToClientEvents } from '../public/lobby/network/LobbyNetworkEvents';
import { InterServerEvents, SocketData } from '../ServerNetworkTypes';
export declare type LobbySocket = Socket<LobbyClientToServerEvents, LobbyServerToClientEvents, InterServerEvents, SocketData>;
