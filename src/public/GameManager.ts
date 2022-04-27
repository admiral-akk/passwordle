import {
  BoardManager,
  OpponentBoardManager,
  PlayerBoardManager,
} from './BoardManager';
import {InputManager} from './InputManager';
import {NetworkInterface} from './NetworkInterface';

export class GameManager {
  private state: GameState;
  private network: NetworkInterface;
  private playerBoard: PlayerBoardManager;
  private opponentBoard: OpponentBoardManager;
  private input: InputManager;

  constructor() {
    this.state = GameState.WaitingForGame;
    this.network = new NetworkInterface();
    this.playerBoard = new PlayerBoardManager();
    this.opponentBoard = new OpponentBoardManager();
    this.input = new InputManager();
    this.network.Connect();
  }
}

enum GameState {
  None,
  WaitingForGame,
  WaitingForMove,
  PlayerToMove,
}

export enum PlayerActions {
  JoinLobby, // send lobby id, get game state
  StartLobby, // send blank, get lobby id
  EnterGuess, // send guess + id + player, get knowledge + player (Move)
  DeleteChar, // send blank
  AddChar, // send char
  CopyLobbyLink, //  send blank
}

export enum GameActions {
  SendState, //  send id + Move[]
  SendGameId, // send id
  SendResults, // send knowledge
  RequestState, // send id + player
}
