import {GameSocket} from './GameNetworkEvents';
import {InputManager} from './input/InputManager';
import {CharUpdate} from './view/CharUpdate';
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


  private InputActive(): boolean {
    return (
      this.state === GameState.SubmissionOpen ||
      this.state === GameState.OpponentGuessed
    );
  }

  constructor(socket: GameSocket) {
    this.view = new GameView();
    this.socket = socket;
    this.state = GameState.Start;
    this.currentGuess = '';
    this.input = new InputManager((char: string) => this.AddChar(char), ()=>this.Delete(), ()=>this.Submit());
    RegisterSecretWord(this.socket, (secret: string) => this.SetSecret(secret));
    RegisterSubmissionOpen(this.socket, () => this.SubmissionOpen());
  }

  private currentGuess: string;

  private AddChar(char: string) {
    if (!this.InputActive()) {
      return;
    }
    if (this.currentGuess.length >= 5) {
      return;
    }
    const update = new CharUpdate(char, 0, this.currentGuess.length);
    this.view.Update(update);
    this.currentGuess += char;
    console.log(`CHAR: ${char}`);
  }

  private Submit() {
    if (!this.InputActive()) {
      return;
    }
    console.log('SUBMIT');
  }

  private Delete() {
    if (!this.InputActive()) {
      return;
    }
    if (this.currentGuess.length === 0) {
      return;
    }

    this.currentGuess = this.currentGuess.slice(0, -1);
    const update = new CharUpdate('', 0, this.currentGuess.length);
    this.view.Update(update);
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
