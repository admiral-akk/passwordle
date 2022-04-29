import {GameSocket} from './GameNetworkEvents';
import {GameView} from './view/GameView';

enum GameState {
  Start, // Nothing happened yet. Request game info.
  ShowHiddenWord, // Hidden word revealed
  Guess, // Player can guess
  WaitingForOpponent, // Guessed, waiting for opponent to guess
  OpponentGuessed, // Opponent guessed, start timer
  RevealHints, // Both guessed, show results
  Won, // Won
  Lost, // Lost
  EndGameMenu, // Rematch, Random Match, Private
}

export class GameManager {
  private view: GameView;
  private socket: GameSocket;
  private state: GameState;
  constructor(socket: GameSocket) {
    this.view = new GameView();
    this.socket = socket;
    this.state = GameState.Start;
    this.SetState(GameState.Start);
  }

  private SetState(newState: GameState) {
    switch (newState) {
      case GameState.Start:
        this.view.Start();
        break;
      default:
        break;
    }
  }
}
