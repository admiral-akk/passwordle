import {GameSocket} from './GameNetworkEvents';
import {InputManager} from './input/InputManager';
import {GameView} from './view/GameView';

enum GameState {
  Start, // Nothing happened yet. Request game info.
  ShowHiddenWord, // Hidden word revealed
  SubmissionOpen, // Player can guess
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
  private input: InputManager;

  constructor(socket: GameSocket) {
    this.view = new GameView();
    this.socket = socket;
    this.state = GameState.Start;
    this.input = new InputManager(this.AddChar, this.Delete, this.Submit);
    RegisterSecretWord(this.socket, (secret: string) => this.SetSecret(secret));
    RegisterSubmissionOpen(this.socket, () => this.SubmissionOpen());
  }

  private AddChar(char: string) {
    console.log(`CHAR: ${char}`);
  }

  private Submit() {
    console.log('SUBMIT');
  }

  private Delete() {
    console.log('DELETE');
  }

  private SubmissionOpen() {
    this.SetState(GameState.SubmissionOpen);
  }

  private SetSecret(secret: string) {
    this.view.SetSecret(secret);
    this.SetState(GameState.ShowHiddenWord);
  }

  private SetState(newState: GameState) {
    this.state = newState;
    switch (newState) {
      default:
        break;
    }
  }
}

function RegisterSecretWord(
  socket: GameSocket,
  callback: (secret: string) => void
) {
  socket.on('SecretWord', (secret: string) => {
    callback(secret);
  });
}

function RegisterSubmissionOpen(socket: GameSocket, callback: () => void) {
  socket.on('SubmissionOpen', () => {
    callback();
  });
}
