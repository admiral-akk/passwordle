// Server: Takes Action, passes PlayerId, GameId, Action to central server.

import {
  GameServerSocket,
  GameUpdateEmitter,
  RegisterGameServer,
} from '../../network/GameNetworkTypes';
import {PlayerId} from '../../structs/PlayerId';
import {Game} from './Game';
import {GameUpdater} from './GameUpdater';
import {GameValidator} from './GameValidator';

export class GameServer {
  private gameValidators: Record<PlayerId, GameValidator> = {};
  private gameUpdaters: Record<PlayerId, GameUpdater> = {};
  private games: Record<PlayerId, Game> = {};

  constructor(private ExitGame: (game: PlayerId[]) => void) {}

  StartGame(playerSockets: GameServerSocket[]) {
    const players = playerSockets.map(socket => socket.data.playerId!);
    const game = new Game(players);
    playerSockets.forEach(socket => {
      const player = socket.data.playerId!;
      this.games[player] = game;
      this.gameValidators[player] = new GameValidator(
        player,
        game.gameStates[player],
        game
      );
      RegisterGameServer(socket, this.gameValidators[player]);
      this.gameUpdaters[player] = new GameUpdater(
        game.gameStates[player],
        new GameUpdateEmitter(socket)
      );
      game.RegisterUpdater(player, this.gameUpdaters[player]);
    });
  }

  EndGame(players: PlayerId[]) {
    players.forEach(player => {
      delete this.games[player];
      delete this.gameValidators[player];
      delete this.gameUpdaters[player];
    });
    this.ExitGame(players);
  }
}
