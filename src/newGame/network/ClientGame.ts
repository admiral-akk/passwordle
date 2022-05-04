import {ClientBoard} from '../model/ClientBoard';
import {GameClientSocket} from './GameNetworkTypes';
import {AddedChar, OpponentAddedChar} from './updates/Updates';

export class ClientGame {
  private board: ClientBoard = new ClientBoard();
  constructor(private socket: GameClientSocket) {
    socket.on('OpponentAddedChar', () => this.OpponentAddedChar());
  }

  AddChar(char: string): AddedChar {
    const res = this.board.AddChar(char);
    // success: tell the server/view about it
    if (typeof res === AddedChar.name) {
      this.socket.emit('AddedChar', res);
    }
    return res;
  }

  OpponentAddedChar() {
    this.board.OpponentAddedChar();
  }
}
