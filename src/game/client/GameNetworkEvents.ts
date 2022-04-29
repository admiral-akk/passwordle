import {Socket} from 'socket.io-client';

export interface GameServerToClientEvents {
  NewGame: () => void;
}

export interface GameClientToServerEvents {
  SubmitGuess: () => void;
}

export type GameSocket = Socket<
  GameServerToClientEvents,
  GameClientToServerEvents
>;
