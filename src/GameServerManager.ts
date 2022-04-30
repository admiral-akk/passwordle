import {GameServer} from './game/GameServer';

export class GameServerManager {
  private activeGames: GameServer[];

  private handoffGame: (game: GameServer) => void;

  constructor(handoffGame: (game: GameServer) => void) {
    this.activeGames = [];
    this.handoffGame = handoffGame;
  }

  AddGame(game: GameServer) {
    this.activeGames.push(game);
  }

  GameCompleted() {}
}
