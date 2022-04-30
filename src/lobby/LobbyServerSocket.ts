import {Socket} from 'socket.io';
import {InterServerEvents, SocketData} from '../NetworkTypes';
import {
  LobbyClientToServerEvents,
  LobbyServerToClientEvents,
} from './client/LobbyNetworkEvents';

export interface LobbySocketData {
  isReady: boolean;
}

export type LobbyServerSocket = Socket<
  LobbyClientToServerEvents,
  LobbyServerToClientEvents,
  InterServerEvents,
  LobbySocketData
>;
