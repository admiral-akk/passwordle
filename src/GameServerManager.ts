import {GameServerSocket} from './game/GameServerSocket';
import {ServerGame} from './newGame/network/ServerGame';

export class GameServerManager {
  private activeGames: Record<string, ServerGame>;

  private gameComplete: (game: GameServerSocket[]) => void;

  constructor(gameComplete: (game: GameServerSocket[]) => void) {
    this.activeGames = {};
    this.gameComplete = gameComplete;
  }

  NewGame(players: GameServerSocket[]) {
    players.forEach((s, i) => (s.data.playerIndex = i));
    const gameId = players[0].id;
    const game = new ServerGame(players);
    this.activeGames[gameId] = game;
  }

  private GameCompleted(gameId: string) {
    delete this.activeGames[gameId];
  }
}
