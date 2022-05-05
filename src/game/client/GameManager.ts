import {ToWord} from '../structs/Word';
import {IsValidWord} from '../Words';
import {GameClientSocket} from './GameNetworkEvents';
import {InputManager} from './input/InputManager';
import {Hint} from './structs/Hint';
import {CharUpdate} from './view/CharUpdate';
import {GameView} from './view/GameView';
import {HintUpdate} from './view/HintUpdate';

enum GameState {
  Start, // Nothing happened yet. Request game info.
  ShowHiddenWord, // Hidden word revealed
  SubmissionOpen, // Player can guess
  SentGuess, // Player guessed
  WaitingForOpponent, // Guessed, waiting for opponent to guess
  OpponentGuessed, // Opponent guessed, start timer
  RevealHints, // Both guessed, show results
  Won, // Won
  Lost, // Lost
  EndGameMenu, // Rematch, Random Match, Private
}

export class GameManager {
  private view: GameView;
  private socket: GameClientSocket;
  private state: GameState;
  private input: InputManager;

  private InputActive(): boolean {
    return (
      this.state === GameState.SubmissionOpen ||
      this.state === GameState.OpponentGuessed
    );
  }

  constructor(socket: GameClientSocket) {
    this.view = new GameView();
    this.socket = socket;
    this.state = GameState.Start;
    this.currentGuess = '';
    this.currentIndex = 0;
    this.input = new InputManager(
      (char: string) => this.AddChar(char),
      () => this.Delete(),
      () => this.Submit()
    );
    RegisterSecretWord(this.socket, (secret: string) => this.SetSecret(secret));
    RegisterSubmissionOpen(this.socket, () => this.SubmissionOpen());
    RegisterHints(this.socket, (hint: Hint) => this.Hints(hint));
    RegisterLost(this.socket, () => this.Lost());
    RegisterWon(this.socket, () => this.Won());
  }

  private currentGuess: string;
  private currentIndex: number;

  private AddChar(char: string) {
    if (!this.InputActive()) {
      return;
    }
    if (this.currentGuess.length >= 5) {
      return;
    }
    const update = new CharUpdate(
      char,
      this.currentIndex,
      this.currentGuess.length
    );
    this.view.CharUpdate(update);
    this.currentGuess += char;
  }

  private Submit() {
    if (!this.InputActive()) {
      return;
    }
    if (this.currentGuess.length !== 5) {
      return;
    }
    if (!IsValidWord(ToWord(this.currentGuess))) {
      return;
    }

    SubmitGuess(this.socket, this.currentGuess);
    this.currentGuess = '';
    this.currentIndex++;
    this.SetState(GameState.SentGuess);
  }

  private Delete() {
    if (!this.InputActive()) {
      return;
    }
    if (this.currentGuess.length === 0) {
      return;
    }

    this.currentGuess = this.currentGuess.slice(0, -1);
    const update = new CharUpdate(
      '',
      this.currentIndex,
      this.currentGuess.length
    );
    this.view.CharUpdate(update);
  }

  private Lost() {
    this.SetState(GameState.Lost);
  }

  private Won() {
    this.SetState(GameState.Won);
  }

  private SubmissionOpen() {
    this.SetState(GameState.SubmissionOpen);
  }

  private SetSecret(secret: string) {
    this.view.SetSecret(secret);
    this.SetState(GameState.ShowHiddenWord);
  }

  private Hints(hint: Hint) {
    const update = new HintUpdate(hint, this.currentIndex - 1);
    this.view.HintUpdate(update);
    this.SetState(GameState.RevealHints);
  }

  private SetState(newState: GameState) {
    this.state = newState;
    switch (newState) {
      case GameState.RevealHints:
        this.SetState(GameState.SubmissionOpen);
        break;
      case GameState.Lost:
        this.view.GameOver(false);
        break;
      case GameState.Won:
        this.view.GameOver(true);
        break;
      default:
        break;
    }
  }
}

function SubmitGuess(socket: GameClientSocket, guess: string) {
  socket.emit('SubmitGuess', guess);
}

function RegisterSecretWord(
  socket: GameClientSocket,
  callback: (secret: string) => void
) {
  socket.removeAllListeners('SecretWord');
  socket.on('SecretWord', (secret: string) => {
    callback(secret);
  });
}

function RegisterSubmissionOpen(
  socket: GameClientSocket,
  callback: () => void
) {
  socket.removeAllListeners('SubmissionOpen');
  socket.on('SubmissionOpen', () => {
    callback();
  });
}

function RegisterHints(
  socket: GameClientSocket,
  callback: (hint: Hint) => void
) {
  socket.removeAllListeners('Hints');
  socket.on('Hints', hint => {
    callback(hint);
  });
}

function RegisterLost(socket: GameClientSocket, callback: () => void) {
  socket.removeAllListeners('Lost');
  socket.on('Lost', () => {
    callback();
  });
}

function RegisterWon(socket: GameClientSocket, callback: () => void) {
  socket.removeAllListeners('Won');
  socket.on('Won', () => {
    callback();
  });
}
