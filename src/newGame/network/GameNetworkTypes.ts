import {Socket as ServerSocket} from 'socket.io';
import {Socket as ClientSocket} from 'socket.io-client';
import {Word} from '../../game/structs/Word';
import {InterServerEvents, SocketData} from '../../NetworkTypes';
import {
  AddedChar,
  LockedGuess,
  UpdatedAnswerKnowledge,
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
  OpponentDeleted: () => void;
  OpponentLockedGuess: () => void;
  SetSecret: (secret: Word) => void;
  UpdatedAnswerKnowledge: (update: UpdatedAnswerKnowledge) => void;
}

export interface NewGameClientToServerEvents {
  AddedChar: (update: AddedChar) => void;
  Deleted: () => void;
  LockedGuess: (update: LockedGuess) => void;
}
