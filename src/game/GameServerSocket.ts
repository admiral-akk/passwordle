import {Socket} from 'socket.io';
import {DefaultEventsMap} from 'socket.io/dist/typed-events';
import { InterServerEvents, SocketData } from '../NetworkTypes';
import {
  GameClientToServerEvents,
  GameServerToClientEvents,
} from './client/GameNetworkEvents';

export type GameServerSocket = Socket<
  GameClientToServerEvents,
  GameServerToClientEvents,
  InterServerEvents,
  SocketData
>;
