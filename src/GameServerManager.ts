import {EndGameState} from './game/client/view/subview/EndGameView';
import {GameServerSocket} from './game/network/GameNetworkTypes';
import {ServerGame} from './game/network/ServerGame';
import {PlayerId} from './PlayerId';

export class GameServerManager {
  private activeGames: Record<string, ServerGame>;

  constructor(
    private ExitGame: (
      game: PlayerId[],
      ending: Record<PlayerId, EndGameState>
    ) => void
  ) {
    this.activeGames = {};
  }

  EnterGame(players: GameServerSocket[]) {
    const playerIds = players.map(player => player.data.playerId!);
    const gameId = playerIds[0];
    const game = new ServerGame(
      players,
      (ending: Record<PlayerId, EndGameState>) =>
        this.GameCompleted(gameId, playerIds, ending)
    );
    this.activeGames[gameId] = game;
  }

  private GameCompleted(
    gameId: string,
    players: PlayerId[],
    ending: Record<PlayerId, EndGameState>
  ) {
    delete this.activeGames[gameId];
    this.ExitGame(players, ending);
  }
}
