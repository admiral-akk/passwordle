import {GameServerSocket} from './game/GameServerSocket';
import {ServerGame} from './newGame/network/ServerGame';
import {PlayerId} from './PlayerId';

export class GameServerManager {
  private activeGames: Record<string, ServerGame>;

  constructor(private ExitGame: (game: PlayerId[]) => void) {
    this.activeGames = {};
  }

  EnterGame(players: GameServerSocket[]) {
    const playerIds = players.map(player => player.data.playerId!);
    const gameId = playerIds[0];
    const game = new ServerGame(players, () =>
      this.GameCompleted(gameId, playerIds)
    );
    this.activeGames[gameId] = game;
  }

  private GameCompleted(gameId: string, players: PlayerId[]) {
    delete this.activeGames[gameId];
    this.ExitGame(players);
  }
}
