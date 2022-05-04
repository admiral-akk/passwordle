import {GameServerSocket} from '../../game/GameServerSocket';
import {PlayerId} from '../../PlayerId';
import {ServerBoard} from '../model/ServerBoard';
import {ClientGameMirror} from './ClientGameMirror';
export class ServerGame {
  opponent: Record<PlayerId, PlayerId> = {};
  playerClient: Record<PlayerId, ClientGameMirror> = {};
  board: ServerBoard = new ServerBoard();

  constructor(sockets: GameServerSocket[]) {
    for (let i = 0; i < sockets.length; i++) {
      const player = sockets[i].data.playerId!;
      this.opponent[player] = sockets[(i + 1) % 2].data.playerId!;
      this.playerClient[player] = new ClientGameMirror(sockets[i]);
    }
  }
}
