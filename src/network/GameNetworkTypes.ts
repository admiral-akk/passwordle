import {Socket as ServerSocket} from 'socket.io';
import {Socket as ClientSocket} from 'socket.io-client';
import {Word} from '../structs/Word';
import {InterServerEvents, SocketData} from './NetworkTypes';
import {
  AddedChar,
  LockedGuess,
  UpdatedAnswerKnowledge,
} from '../game/network/Updates';
import {PlayerId} from '../structs/PlayerId';

export type GameClientSocket = ClientSocket<GameUpdates, GameActions>;
export type GameServerSocket = ServerSocket<
  GameActions,
  GameUpdates,
  InterServerEvents,
  SocketData
>;

// How can we automate this so it simply registers every function in the interface?
export function RegisterGameClient(
  socket: GameClientSocket,
  client: GameUpdates
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
  server: GameActions
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

export interface GameUpdates {
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

export class GameUpdateEmitter implements GameUpdates {
  constructor(private socket: GameServerSocket) {}
  AddedChar = (update: AddedChar) => this.socket.emit('AddedChar', update);
  Deleted = () => this.socket.emit('Deleted');
  LockedGuess = (update: LockedGuess) =>
    this.socket.emit('LockedGuess', update);
  OpponentAddedChar = () => this.socket.emit('OpponentAddedChar');
  OpponentDeleted = () => this.socket.emit('OpponentDeleted');
  OpponentLockedGuess = () => this.socket.emit('OpponentLockedGuess');
  SetSecret = (secret: Word) => this.socket.emit('SetSecret', secret);
  UpdatedAnswerKnowledge = (update: UpdatedAnswerKnowledge) =>
    this.socket.emit('UpdatedAnswerKnowledge', update);
  OpponentDisconnected = () => this.socket.emit('OpponentDisconnected');
}

export interface GameActions {
  AddedChar: (update: AddedChar, playerId?: PlayerId) => void;
  Deleted: (playerId?: PlayerId) => void;
  LockedGuess: (update: LockedGuess, playerId?: PlayerId) => void;
  GameClientReady: (playerId?: PlayerId) => void;
}
