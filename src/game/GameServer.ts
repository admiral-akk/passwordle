import {GameSocket} from './client/GameNetworkEvents';

enum GameState {
  Start,
}

export class GameServer {
  private players: GameSocket[];
  constructor(players: GameSocket[]) {
    this.players = players;
  }
}