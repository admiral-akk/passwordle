import { Socket } from 'socket.io-client';
import { Hint } from './structs/Hint';
export interface GameServerToClientEvents {
    SecretWord: (secret: string) => void;
    SubmissionOpen: () => void;
    Hints: (hint: Hint) => void;
    Lost: () => void;
    Won: () => void;
}
export interface GameClientToServerEvents {
    SubmitGuess: (guess: string) => void;
}
export declare type GameClientSocket = Socket<GameServerToClientEvents, GameClientToServerEvents>;
