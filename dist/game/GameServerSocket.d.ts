import { Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import { GameClientToServerEvents, GameServerToClientEvents } from './client/GameNetworkEvents';
export declare type GameServerSocket = Socket<GameClientToServerEvents, GameServerToClientEvents, DefaultEventsMap, DefaultEventsMap>;
