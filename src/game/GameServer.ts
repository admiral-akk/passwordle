import {GameServerSocket} from './GameServerSocket';

enum GameState {
  Start,
}

export class GameServer {
  private players: GameServerSocket[];
  private state: GameState;
  constructor(players: GameServerSocket[]) {
    this.players = players;
    this.state = GameState.Start;
  }
}
