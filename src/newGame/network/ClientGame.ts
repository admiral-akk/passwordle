import {ClientBoard} from '../model/ClientBoard';
import {GameClientSocket} from './GameNetworkTypes';
import {AddedChar, UpdatedAnswerKnowledge} from './updates/Updates';

export class ClientGame {
  private board: ClientBoard = new ClientBoard();
  constructor(private socket: GameClientSocket) {
    socket.on('OpponentAddedChar', () => this.board.OpponentAddedChar());
    socket.on('UpdatedAnswerKnowledge', (update: UpdatedAnswerKnowledge) =>
      this.board.UpdatedAnswerKnowledge(update)
    );
    this.board.Ready();
    socket.emit('Ready');
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
