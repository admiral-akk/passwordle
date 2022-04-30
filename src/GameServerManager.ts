import {GameServer} from './game/GameServer';
import {GameServerSocket} from './game/GameServerSocket';

export class GameServerManager {
  private activeGames: Record<string, GameServer>;

  private gameComplete: (game: GameServerSocket[]) => void;

  constructor(gameComplete: (game: GameServerSocket[]) => void) {
    this.activeGames = {};
    this.gameComplete = gameComplete;
  }

  NewGame(players: GameServerSocket[]) {
    players.forEach((s, i) => (s.data.playerIndex = i));
    const game = new GameServer(players);
    this.activeGames[players[0].id] = game;
  }

  GameCompleted(game: GameServer) {
    this.gameComplete(game.players);
    delete this.activeGames[game.players[0].id];
  }
}
