import {Socket as ServerSocket} from 'socket.io';
import {Socket as ClientSocket} from 'socket.io-client';
import {Word} from '../structs/Word';
import {InterServerEvents, SocketData} from './NetworkTypes';
import {AddedChar, UpdatedAnswerKnowledge} from '../game/network/Updates';
import {PlayerId} from '../structs/PlayerId';
import {EndGameSummary} from '../structs/EndGameState';

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
  socket.on('LockedGuess', () => client.LockedGuess());

  socket.on('OpponentAddedChar', () => client.OpponentAddedChar());
  socket.on('OpponentDeleted', () => client.OpponentDeleted());
  socket.on('OpponentLockedGuess', () => client.OpponentLockedGuess());
  socket.on('SetSecret', (secret: Word) => client.SetSecret(secret));
  socket.on('UpdatedAnswerKnowledge', (update: UpdatedAnswerKnowledge) =>
    client.UpdatedAnswerKnowledge(update)
  );
  socket.on('OpponentDisconnected', (endGameState: EndGameSummary) =>
    client.OpponentDisconnected(endGameState)
  );
  socket.on('RandomGuess', (guess: Word) => client.RandomGuess(guess));
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
  socket.removeAllListeners('RandomGuess');
}

export function RegisterGameServer(
  socket: GameServerSocket,
  server: GameActions
) {
  socket.on('AddChar', (update: AddedChar) => server.AddChar(update));
  socket.on('Delete', () => server.Delete());
  socket.on('LockGuess', () => server.LockGuess());
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
  LockedGuess: () => void;
  OpponentAddedChar: () => void;
  OpponentDeleted: () => void;
  OpponentLockedGuess: () => void;
  SetSecret: (secret: Word) => void;
  UpdatedAnswerKnowledge: (update: UpdatedAnswerKnowledge) => void;
  OpponentDisconnected: (endGameSummary: EndGameSummary) => void;
  RandomGuess: (guess: Word) => void;
}

export class GameUpdateEmitter implements GameUpdates {
  constructor(private socket: GameServerSocket) {}
  AddedChar = (update: AddedChar) => this.socket.emit('AddedChar', update);
  Deleted = () => this.socket.emit('Deleted');
  LockedGuess = () => this.socket.emit('LockedGuess');
  OpponentAddedChar = () => this.socket.emit('OpponentAddedChar');
  OpponentDeleted = () => this.socket.emit('OpponentDeleted');
  OpponentLockedGuess = () => this.socket.emit('OpponentLockedGuess');
  SetSecret = (secret: Word) => this.socket.emit('SetSecret', secret);
  UpdatedAnswerKnowledge = (update: UpdatedAnswerKnowledge) =>
    this.socket.emit('UpdatedAnswerKnowledge', update);
  OpponentDisconnected = (endGameSummary: EndGameSummary) =>
    this.socket.emit('OpponentDisconnected', endGameSummary);
  RandomGuess = (update: Word) => this.socket.emit('RandomGuess', update);
}

export interface GameActions {
  AddChar: (update: AddedChar, playerId?: PlayerId) => void;
  Delete: (playerId?: PlayerId) => void;
  LockGuess: (playerId?: PlayerId) => void;
  GameClientReady: (playerId?: PlayerId) => void;
}
