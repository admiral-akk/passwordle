import { Socket } from 'socket.io';
import { InterServerEvents, SocketData } from '../NetworkTypes';
import { GameClientToServerEvents, GameServerToClientEvents } from './client/GameNetworkEvents';
export declare type GameServerSocket = Socket<GameClientToServerEvents, GameServerToClientEvents, InterServerEvents, SocketData>;
