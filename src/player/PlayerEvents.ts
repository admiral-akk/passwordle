import {Socket} from 'socket.io-client';
import {EventsMap} from 'socket.io/dist/typed-events';

export interface PlayerServerToClientEvents {
  OpponentDisconnected: () => void;
  GameOver: () => void;
  GameStarted: () => void;
}

export type PlayerSocket = Socket<PlayerServerToClientEvents, EventsMap>;

export function Register(
  socket: PlayerSocket,
  handler: PlayerServerToClientEvents
) {
  socket.on('GameOver', () => handler.GameOver());
  socket.on('OpponentDisconnected', () => handler.OpponentDisconnected());
  socket.on('GameStarted', () => handler.GameStarted());
}
