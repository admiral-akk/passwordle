import {Socket} from 'socket.io-client';

export interface GameServerToClientEvents {
  SecretWord: (secret: string) => void;
}

export interface GameClientToServerEvents {
  SubmitGuess: () => void;
}

export type GameSocket = Socket<
  GameServerToClientEvents,
  GameClientToServerEvents
>;
