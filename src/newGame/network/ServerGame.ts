import {GameServerSocket} from './GameNetworkTypes';
import {PlayerId} from '../../PlayerId';
import {ServerBoard} from '../model/ServerBoard';
import {ClientGameMirror} from './ClientGameMirror';
import {AddedChar} from './updates/Updates';
export class ServerGame {
  opponent: Record<PlayerId, PlayerId> = {};
  playerClient: Record<PlayerId, ClientGameMirror> = {};
  board: ServerBoard;

  constructor(sockets: GameServerSocket[]) {
    this.board = new ServerBoard(sockets.map(s => s.data.playerId!));
    for (let i = 0; i < sockets.length; i++) {
      const player = sockets[i].data.playerId!;
      console.log(`player: ${player}`);
      this.opponent[player] = sockets[(i + 1) % 2].data.playerId!;
      this.playerClient[player] = new ClientGameMirror(
        sockets[i],
        (update: AddedChar) => this.addedChar(player, update),
        () => this.ready(player)
      );
      this.playerClient[player].UpdatedAnswerKnowledge(
        this.board.generateKnowledge(player)
      );
    }
  }

  addedChar(player: PlayerId, update: AddedChar) {
    this.board.addedChar(player, update);
    this.playerClient[this.opponent[player]].OpponentAddedChar();
  }

  ready(player: PlayerId) {
    const opponent = this.opponent[player];
    if (this.playerClient[opponent].IsReady()) {
      this.playerClient[opponent];
    }
  }
}
