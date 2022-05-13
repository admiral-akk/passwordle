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

// How can we automate this so it simply registers every function in the interface?
export function RegisterGameClient(
  socket: GameClientSocket,
  client: ToClientGameEvents
) {
  socket.on('AddedChar', (update: AddedChar) => client.AddedChar(update));
  socket.on('Deleted', () => client.Deleted());
  socket.on('LockedGuess', (update: LockedGuess) => client.LockedGuess(update));

  socket.on('OpponentAddedChar', () => client.OpponentAddedChar());
  socket.on('OpponentDeleted', () => client.OpponentDeleted());
  socket.on('OpponentLockedGuess', () => client.OpponentLockedGuess());
  socket.on('SetSecret', (secret: Word) => client.SetSecret(secret));
  socket.on('UpdatedAnswerKnowledge', (update: UpdatedAnswerKnowledge) =>
    client.UpdatedAnswerKnowledge(update)
  );
  socket.on('OpponentDisconnected', () => client.OpponentDisconnected());
}
export function DeregisterGameClient(socket: GameClientSocket) {
  socket.removeAllListeners('AddedChar');
  socket.removeAllListeners('Deleted');
  socket.removeAllListeners('LockedGuess');
  socket.removeAllListeners('OpponentAddedChar');
  socket.removeAllListeners('OpponentDeleted');
  socket.removeAllListeners('OpponentLockedGuess');
  socket.removeAllListeners('SetSecret');
  socket.removeAllListeners('UpdatedAnswerKnowledge');
  socket.removeAllListeners('OpponentDisconnected');
}

export function RegisterGameServer(
  socket: GameServerSocket,
  server: ToServerGameEvents
) {
  socket.on('AddedChar', (update: AddedChar) => server.AddedChar(update));
  socket.on('Deleted', () => server.Deleted());
  socket.on('LockedGuess', (update: LockedGuess) => server.LockedGuess(update));
  socket.on('GameClientReady', () => server.GameClientReady());
}

export function DeregisterGameServer(socket: GameServerSocket) {
  socket.removeAllListeners('AddedChar');
  socket.removeAllListeners('Deleted');
  socket.removeAllListeners('LockedGuess');
  socket.removeAllListeners('GameClientReady');
}

export interface ToClientGameEvents {
  AddedChar: (update: AddedChar) => void;
  Deleted: () => void;
  LockedGuess: (update: LockedGuess) => void;
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
