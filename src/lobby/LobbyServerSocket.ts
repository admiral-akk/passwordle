import {Socket} from 'socket.io';
import {DefaultEventsMap} from 'socket.io/dist/typed-events';
import { InterServerEvents, SocketData } from '../NetworkTypes';
import {
  LobbyClientToServerEvents,
  LobbyServerToClientEvents,
} from './client/LobbyNetworkEvents';

export type LobbyServerSocket = Socket<
  LobbyClientToServerEvents,
  LobbyServerToClientEvents,
  InterServerEvents,
  SocketData
>;
