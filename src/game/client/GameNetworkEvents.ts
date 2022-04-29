import {Socket} from 'socket.io-client';
import {Hint} from './structs/Hint';

export interface GameServerToClientEvents {
  SecretWord: (secret: string) => void;
  SubmissionOpen: () => void;
  Hints: (hint: Hint) => void;
  GameLost: () => void;
  GameWon: () => void;
}

export interface GameClientToServerEvents {
  SubmitGuess: (guess: string) => void;
}

export type GameSocket = Socket<
  GameServerToClientEvents,
  GameClientToServerEvents
>;
