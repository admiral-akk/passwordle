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
    const gameId = players[0].id;
    const game = new GameServer(players, () => this.GameCompleted(gameId));
    this.activeGames[gameId] = game;
  }

  private GameCompleted(gameId: string) {
    this.gameComplete(this.activeGames[gameId].players);
    delete this.activeGames[gameId];
  }
}
