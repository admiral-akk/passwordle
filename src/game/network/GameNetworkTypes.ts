import {Socket as ServerSocket} from 'socket.io';
import {Socket as ClientSocket} from 'socket.io-client';
import {Word} from '../structs/Word';
import {InterServerEvents, SocketData} from '../../NetworkTypes';
import {
  AddedChar,
  LockedGuess,
  UpdatedAnswerKnowledge,
} from './updates/Updates';

export type GameClientSocket = ClientSocket<
  GameServerToClientEvents,
  GameClientToServerEvents
>;
export type GameServerSocket = ServerSocket<
  GameClientToServerEvents,
  GameServerToClientEvents,
  InterServerEvents,
  SocketData
>;

export interface GameServerToClientEvents {
  OpponentAddedChar: () => void;
  OpponentDeleted: () => void;
  OpponentLockedGuess: () => void;
  SetSecret: (secret: Word) => void;
  UpdatedAnswerKnowledge: (update: UpdatedAnswerKnowledge) => void;
  OpponentDisconnected: () => void;
}

export interface GameClientToServerEvents {
  AddedChar: (update: AddedChar) => void;
  Deleted: () => void;
  LockedGuess: (update: LockedGuess) => void;
}
