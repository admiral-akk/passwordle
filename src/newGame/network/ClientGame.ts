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
  private view: GameView = new GameView();
  constructor(private socket: GameClientSocket) {
    this.board = new PlayerBoard(this.view);
    socket.on('OpponentAddedChar', () => this.OpponentAddedChar());
    socket.on('UpdatedAnswerKnowledge', (update: UpdatedAnswerKnowledge) =>
      this.UpdatedAnswerKnowledge(update)
    );
    this.board.Ready();
    new InputManager(
      (char: string) => this.AddChar(char),
      () => {},
      () => {}
    );
    socket.emit('Ready');
  }

  OpponentAddedChar() {
    this.board.OpponentAddedChar();
  }

  UpdatedAnswerKnowledge(update: UpdatedAnswerKnowledge) {
    this.board.UpdatedAnswerKnowledge(update);
    this.view.SetSecret(update.playerWord);
  }

  AddChar(char: string): AddedChar {
    const res = this.board.AddChar(char);
    // success: tell the server/view about it
    if (typeof res === AddedChar.name) {
      this.socket.emit('AddedChar', res);
    }

    return res;
  }
}
