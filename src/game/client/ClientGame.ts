import {InputManager} from './input/InputManager';
import {GameView} from './view/GameView';
import {Word} from '../structs/Word';
import {PlayerBoard} from '../model/PlayerBoard';
import {
  GameClientSocket,
  GameServerToClientEvents,
} from '../network/GameNetworkTypes';
import {
  AddedChar,
  LockedGuess,
  UpdatedAnswerKnowledge,
} from '../network/updates/Updates';

export class ClientGame implements GameServerToClientEvents {
  private board: PlayerBoard;
  constructor(private socket: GameClientSocket, showMenu: () => void) {
    this.board = new PlayerBoard(new GameView(), showMenu);
    socket.on('OpponentAddedChar', () => this.OpponentAddedChar());
    socket.on('UpdatedAnswerKnowledge', (update: UpdatedAnswerKnowledge) =>
      this.UpdatedAnswerKnowledge(update)
    );
    socket.on('SetSecret', (secret: Word) => this.SetSecret(secret));
    socket.on('OpponentDeleted', () => this.OpponentDeleted());
    socket.on('OpponentLockedGuess', () => this.OpponentLockedGuess());
    socket.on('OpponentDisconnected', () => this.OpponentDisconnected());
    new InputManager(
      (char: string) => this.AddChar(char),
      () => this.Delete(),
      () => this.Submit()
    );
  }

  OpponentDisconnected() {
    this.board.OpponentDisconnected();
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

  UpdatedAnswerKnowledge(update: UpdatedAnswerKnowledge) {
    this.board.UpdatedAnswerKnowledge(update);
  }

  AddChar(char: string) {
    const res = this.board.AddCharCommand(char);
    // success: tell the server/view about it
    if (res) {
      const command = res as AddedChar;
      this.board.AddedChar(command);
      this.socket.emit('AddedChar', command);
    }
  }

  Delete() {
    const res = this.board.DeleteCommand();
    // success: tell the server/view about it
    if (res) {
      this.board.Deleted();
      this.socket.emit('Deleted');
    }
  }

  Submit() {
    const res = this.board.SubmitCommand();
    // success: tell the server/view about it
    if (res) {
      const command = res as LockedGuess;
      this.board.LockedGuess(command);
      this.socket.emit('LockedGuess', command);
    }
  }
}
