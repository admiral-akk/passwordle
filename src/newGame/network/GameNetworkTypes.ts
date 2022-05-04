import {Socket as ServerSocket} from 'socket.io';
import {Socket as ClientSocket} from 'socket.io-client';
import {InterServerEvents, SocketData} from '../../NetworkTypes';
import {AddedChar, Submitted, UpdatedAnswerKnowledge} from './updates/Updates';

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
  UpdatedAnswerKnowledge: (update: UpdatedAnswerKnowledge) => void;
  OpponentDeleted: () => void;
  OpponentSubmitted: () => void;
}

export interface NewGameClientToServerEvents {
  AddedChar: (update: AddedChar) => void;
  Deleted: () => void;
  Submitted: (update: Submitted) => void;
}
