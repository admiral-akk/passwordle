import {Socket} from 'socket.io-client';
import {Password} from '../../utils/structs/Password';

export interface GameServerSentEvents {
  GetYourPassword(password: Password): void;
  OpponentLockedGuess(): void;
}
export interface GameClientSentEvents {}
export type GameSocket = Socket<GameServerSentEvents, GameClientSentEvents>;

export function Register(socket: GameSocket, handler: GameServerSentEvents) {
  socket.on('GetYourPassword', (password: Password) =>
    handler.GetYourPassword(password)
  );
  socket.on('OpponentLockedGuess', () => handler.OpponentLockedGuess());
}
