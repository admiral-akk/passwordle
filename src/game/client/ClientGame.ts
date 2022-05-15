import {InputManager} from './input/InputManager';
import {Word} from '../../structs/Word';
import {GameState} from '../model/GameState';
import {RegisterGameClient, GameUpdates} from '../../network/GameNetworkTypes';
import {
  AddedChar,
  LockedGuess,
  UpdatedAnswerKnowledge,
} from '../network/Updates';
import {ClientSocket} from '../../client/ClientNetworking';
import {EndGameSummary} from '../../structs/EndGameState';

enum State {
  None,
  SubmissionOpen,
  EnteringRandomGuess,
}

export class ClientGame implements GameUpdates {
  protected Register(socket: ClientSocket): void {
    RegisterGameClient(socket, this);
  }

  private Reset() {
    this.board.Reset();
  }

  StartGame() {
    this.Reset();
    this.socket!.emit('GameClientReady');
  }

  private board: GameState;
  constructor(
    private socket: ClientSocket,
    private gameEnd: (endGame: EndGameSummary) => void
  ) {
    this.board = new GameState(
      document.getElementById('game-board')!,
      (key: string) => this.Input(key),
      (guess: Word, currentGuessLength: number) =>
        this.SubmitRandomGuess(guess, currentGuessLength)
    );
    new InputManager(
      (char: string) => this.Input(char),
      () => this.Input('DEL'),
      () => this.Input('ENT')
    );
    RegisterGameClient(socket, this);
  }

  AddedChar(update: AddedChar) {}
  Deleted() {}
  LockedGuess(update: LockedGuess) {}

  private state: State = State.None;

  private SubmitRandomGuess(guess: Word, currentGuessLength: number) {
    this.state = State.EnteringRandomGuess;
    let animations: Promise<void> = new Promise(resolve => {
      resolve();
    });
    for (let i = 0; i < currentGuessLength; i++) {
      animations = animations
        .then(() => {
          this.Delete();
          return Promise.resolve();
        })
        .then(() => new Promise(resolve => setTimeout(resolve, 300)));
    }
    for (let i = 0; i < guess.length; i++) {
      animations = animations
        .then(() => {
          this.AddChar(guess[i]);
          return Promise.resolve();
        })
        .then(() => new Promise(resolve => setTimeout(resolve, 300)));
    }
    animations.then(() => {
      this.Submit();
      this.state = State.SubmissionOpen;
      return Promise.resolve();
    });
  }

  private Input(key: string) {
    if (this.state !== State.SubmissionOpen) {
      return;
    }
    if (key.length === 1) {
      this.AddChar(key);
    } else if (key === 'ENT') {
      this.Submit();
    } else {
      this.Delete();
    }
  }

  OpponentDisconnected() {
    this.board.OpponentDisconnected();
    // this.SwitchState(new LobbyManager(this.socket, this.set));
  }

  SetSecret(secret: Word) {
    this.board.SetSecret(secret);
    this.state = State.SubmissionOpen;
  }
  OpponentLockedGuess() {
    this.board.OpponentLockedGuess();
  }

  OpponentDeleted() {
    this.board.OpponentDeleted();
  }

  OpponentAddedChar() {
    this.board.OpponentAddedChar();
  }

  EndGame(endGameSummary: EndGameSummary): Promise<void> {
    return new Promise<void>(resolve => {
      this.gameEnd(endGameSummary);
      resolve();
    });
  }

  UpdatedAnswerKnowledge(update: UpdatedAnswerKnowledge) {
    const animationPromise = this.board.UpdatedAnswerKnowledge(update);
    Promise.resolve()
      .then(() => animationPromise)
      .then(() => {
        const gameOver = this.board.IsGameOver();
        if (!gameOver) {
          this.state = State.SubmissionOpen;
          return Promise.resolve();
        }
        return this.EndGame(update.endGameState!);
      });
  }

  AddChar(char: string) {
    const command = new AddedChar(char);
    const res = this.board.AddedChar(command);
    // success: tell the server/view about it
    if (res) {
      this.socket!.emit('AddedChar', command);
    }
  }

  Delete() {
    const res = this.board.Deleted();
    // success: tell the server/view about it
    if (res) {
      this.socket!.emit('Deleted');
    }
  }

  Submit() {
    const res = this.board.LockedGuess();
    // success: tell the server/view about it
    if (res) {
      this.socket!.emit('LockedGuess', new LockedGuess(res));
    }
  }
}
