import { Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import { LobbyClientToServerEvents, LobbyServerToClientEvents } from './client/LobbyNetworkEvents';
export declare type LobbyServerSocket = Socket<LobbyClientToServerEvents, LobbyServerToClientEvents, DefaultEventsMap, DefaultEventsMap>;
