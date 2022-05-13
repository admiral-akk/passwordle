import {Socket as ServerSocket} from 'socket.io';
import {Socket as ClientSocket} from 'socket.io-client';
import {Word} from '../structs/Word';
import {InterServerEvents, SocketData} from './NetworkTypes';
import {
  AddedChar,
  LockedGuess,
  UpdatedAnswerKnowledge,
} from '../game/network/updates/Updates';

export type GameClientSocket = ClientSocket<
  ToClientGameEvents,
  ToServerGameEvents
>;
export type GameServerSocket = ServerSocket<
  ToServerGameEvents,
  ToClientGameEvents,
  InterServerEvents,
  SocketData
>;

export interface ToClientGameEvents {
  OpponentAddedChar: () => void;
  OpponentDeleted: () => void;
  OpponentLockedGuess: () => void;
  SetSecret: (secret: Word) => void;
  UpdatedAnswerKnowledge: (update: UpdatedAnswerKnowledge) => void;
  OpponentDisconnected: () => void;
}

export interface ToServerGameEvents {
  AddedChar: (update: AddedChar) => void;
  Deleted: () => void;
  LockedGuess: (update: LockedGuess) => void;
  GameClientReady: () => void;
}
