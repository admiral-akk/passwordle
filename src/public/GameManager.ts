import {BoardManager} from './BoardManager';
import {ClientManager} from './ClientManager';

export class GameManager {
  private state: GameState;
  private network: ClientManager;
  private board: BoardManager;

  constructor() {
    this.state = GameState.None;
    this.network = new ClientManager();
    this.board = new BoardManager();
  }
}

enum GameState {
  None,
  InLobby,
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
