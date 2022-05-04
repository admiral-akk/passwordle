import {InputManager} from '../../game/client/input/InputManager';
import {GameView} from '../../game/client/view/GameView';
import {PlayerBoard} from '../model/PlayerBoard';
import {
  GameClientSocket,
  NewGameServerToClientEvents,
} from './GameNetworkTypes';
import {AddedChar, UpdatedAnswerKnowledge} from './updates/Updates';

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
      () => {},
      () => {}
    );
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
    const res = this.board.AddChar(char);
    // success: tell the server/view about it
    if (typeof res === AddedChar.name) {
      this.socket.emit('AddedChar', res as AddedChar);
    }
  }
}
