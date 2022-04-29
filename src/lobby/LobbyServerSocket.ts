import {Socket} from 'socket.io';
import {InterServerEvents, SocketData} from '../NetworkTypes';
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
