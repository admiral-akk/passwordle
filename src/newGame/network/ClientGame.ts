import {InputManager} from '../../game/client/input/InputManager';
import {GameView} from '../../game/client/view/GameView';
import {PlayerBoard} from '../model/PlayerBoard';
import {
  GameClientSocket,
  NewGameServerToClientEvents,
} from './GameNetworkTypes';
import {AddedChar, Submitted, UpdatedAnswerKnowledge} from './updates/Updates';

export class ClientGame implements NewGameServerToClientEvents {
  private board: PlayerBoard;
  constructor(private socket: GameClientSocket) {
    this.board = new PlayerBoard(new GameView());
    socket.on('OpponentAddedChar', () => this.OpponentAddedChar());
    socket.on('UpdatedAnswerKnowledge', (update: UpdatedAnswerKnowledge) =>
      this.UpdatedAnswerKnowledge(update)
    );
    new InputManager(
      (char: string) => this.AddChar(char),
      () => this.Delete(),
      () => this.Submit()
    );
  }
  OpponentSubmitted() {
    this.board.OpponentSubmitted();
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
      const command = res as Submitted;
      this.board.Submitted(command);
      this.socket.emit('Submitted', command);
    }
  }
}
