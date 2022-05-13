import {GameServerSocket} from './game/network/GameNetworkTypes';
import {ServerGame} from './game/network/ServerGame';
import {PlayerId} from './structs/PlayerId';

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
