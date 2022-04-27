import {
  BoardManager,
  OpponentBoardManager,
  PlayerBoardManager,
} from './BoardManager';
import {InputManager} from './InputManager';
import { LobbyManager } from './LobbyManager';
import {NetworkInterface} from './NetworkInterface';

export class GameManager {
  private state: GameState;
  private network: NetworkInterface;
  private playerBoard: PlayerBoardManager;
  private opponentBoard: OpponentBoardManager;
  private input: InputManager;
  private lobby: LobbyManager;

  constructor() {
    this.state = GameState.WaitingForGame;
    this.network = new NetworkInterface();
    this.playerBoard = new PlayerBoardManager();
    this.opponentBoard = new OpponentBoardManager();
    this.input = new InputManager();
    this.lobby = new LobbyManager();
    this.network.Connect();
  }


}

enum GameState {
  None,
  WaitingForGame,
  WaitingForMove,
  PlayerToMove,
}
