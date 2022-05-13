import {InputManager} from './input/InputManager';
import {Word} from '../../structs/Word';
import {GameState} from '../model/GameState';
import {
  DeregisterGameClient,
  RegisterGameClient,
  ToClientGameEvents,
} from '../../network/GameNetworkTypes';
import {
  AddedChar,
  LockedGuess,
  UpdatedAnswerKnowledge,
} from '../network/updates/Updates';
import {ClientSocket} from '../../client/ClientNetworking';
import {PlayerState} from '../../client/PlayerState';
import {LobbyManager} from '../../lobby/state/LobbyManager';

enum State {
  None,
  SubmissionOpen,
  EnteringRandomGuess,
}

export class ClientGame extends PlayerState implements ToClientGameEvents {
  public Exit(): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, 2000)).then(() =>
      this.board.Exit()
    );
  }
  protected Enter(): void {
    this.socket!.emit('GameClientReady');
  }

  protected Register(socket: ClientSocket): void {
    RegisterGameClient(socket, this);
  }
  protected Deregister(socket: ClientSocket): void {
    DeregisterGameClient(socket);
  }
  private board: GameState;
  constructor() {
    super();
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
  }

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
    this.SwitchState(new LobbyManager());
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

  EndGame(): Promise<void> {
    return new Promise<void>(resolve => {
      this.SwitchState(new LobbyManager(this.board.GameOver()));
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
        return this.EndGame();
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
