import {InputManager} from './input/InputManager';
import {Word} from '../structs/Word';
import {GameOverState, PlayerBoard} from '../model/PlayerBoard';
import {GameServerToClientEvents} from '../network/GameNetworkTypes';
import {
  AddedChar,
  LockedGuess,
  UpdatedAnswerKnowledge,
} from '../network/updates/Updates';
import {ClientSocket} from '../../public/ClientNetworking';
import {PlayerState} from '../../public/PlayerState';
import {LobbyManager} from '../../lobby/state/LobbyManager';
import {EndGameState} from '../EndGameState';

export class ClientGame
  extends PlayerState
  implements GameServerToClientEvents
{
  public Exit(): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, 2000)).then(() =>
      this.board.Exit()
    );
  }
  protected Enter(): void {
    this.socket!.emit('GameClientReady');
  }

  protected Register(socket: ClientSocket): void {
    socket.on('OpponentAddedChar', () => this.OpponentAddedChar());
    socket.on('UpdatedAnswerKnowledge', (update: UpdatedAnswerKnowledge) =>
      this.UpdatedAnswerKnowledge(update)
    );
    socket.on('SetSecret', (secret: Word) => this.SetSecret(secret));
    socket.on('OpponentDeleted', () => this.OpponentDeleted());
    socket.on('OpponentLockedGuess', () => this.OpponentLockedGuess());
    socket.on('OpponentDisconnected', () => this.OpponentDisconnected());
  }
  protected Deregister(socket: ClientSocket): void {
    socket.removeAllListeners('OpponentAddedChar');
    socket.removeAllListeners('UpdatedAnswerKnowledge');
    socket.removeAllListeners('SetSecret');
    socket.removeAllListeners('OpponentDeleted');
    socket.removeAllListeners('OpponentLockedGuess');
    socket.removeAllListeners('OpponentDisconnected');
  }
  private board: PlayerBoard;
  constructor() {
    super();
    this.board = new PlayerBoard(true, (key: string) => this.Input(key));
    new InputManager(
      (char: string) => this.AddChar(char),
      () => this.Delete(),
      () => this.Submit()
    );
  }

  private Input(key: string) {
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
    this.SwitchState(new LobbyManager(GameOverState.OpponentDisconnected));
  }

  SetSecret(secret: Word) {
    this.board.SetSecret(secret);
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
