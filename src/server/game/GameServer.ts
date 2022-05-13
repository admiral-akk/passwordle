// Server: Takes Action, passes PlayerId, GameId, Action to central server.

import {GameState} from '../../game/model/GameState';
import {AddedChar, LockedGuess} from '../../game/network/updates/Updates';
import {GetRandomAnswer} from '../../game/Words';
import {
  DeregisterGameServer,
  GameActions,
  GameServerSocket,
  GameUpdateEmitter,
  RegisterGameServer,
} from '../../network/GameNetworkTypes';
import {PlayerId} from '../../structs/PlayerId';
import {GameUpdater} from './GameUpdater';
import {GameValidator} from './GameValidator';

export class GameServer implements GameActions {
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
        game.gameState,
        this
      );
      RegisterGameServer(socket, this.gameValidators[player]);
      this.gameUpdaters[player] = new GameUpdater(
        game.gameState,
        new GameUpdateEmitter(socket)
      );
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

  AddedChar = (update: AddedChar, playerId?: PlayerId) => {
    const game = this.games[playerId!];
    const opponentId = game.GetOpponent(playerId!);
    this.gameUpdaters[playerId!].AddedChar(update);
    this.gameUpdaters[opponentId].OpponentAddedChar();
  };
  Deleted = (playerId?: PlayerId) => {
    const game = this.games[playerId!];
    const opponentId = game.GetOpponent(playerId!);
    this.gameUpdaters[playerId!].Deleted();
    this.gameUpdaters[opponentId].OpponentDeleted();
  };

  LockedGuess = (update: LockedGuess, playerId?: PlayerId) => {
    const game = this.games[playerId!];
    const opponentId = game.GetOpponent(playerId!);
    this.gameUpdaters[playerId!].LockedGuess(update);
    this.gameUpdaters[opponentId].OpponentLockedGuess();
  };

  GameClientReady = (playerId?: PlayerId) => {
    this.gameUpdaters[playerId!].SetSecret(GetRandomAnswer());
  };
}

class Game {
  public gameState: GameState;
  constructor(public players: PlayerId[]) {
    this.gameState = new GameState();
  }

  GetOpponent(player: PlayerId): PlayerId {
    if (this.players[0] === player) {
      return this.players[1];
    } else {
      return this.players[0];
    }
  }
}
