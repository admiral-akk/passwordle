import {Socket as ServerSocket} from 'socket.io';
import {Socket as ClientSocket} from 'socket.io-client';
import {InterServerEvents, SocketData} from '../../NetworkTypes';
import {
  AddedChar,
  PlayerKnowledge as KnowledgeUpdated,
} from './updates/Updates';

export type GameClientSocket = ClientSocket<
  NewGameServerToClientEvents,
  NewGameClientToServerEvents
>;
export type GameServerSocket = ServerSocket<
  NewGameClientToServerEvents,
  NewGameServerToClientEvents,
  InterServerEvents,
  SocketData
>;

export interface NewGameServerToClientEvents {
  OpponentAddedChar: () => void;
  KnowledgeUpdated: (update: KnowledgeUpdated) => void;
}

export interface NewGameClientToServerEvents {
  Ready: () => void;
  AddedChar: (update: AddedChar) => void;
}
