import {ClientBoard} from '../model/ClientBoard';
import {GameClientSocket} from './GameNetworkTypes';
import {AddedChar, OpponentAddedChar} from './updates/Updates';

export class ClientGame {
  private board: ClientBoard = new ClientBoard();
  constructor(private socket: GameClientSocket) {
    socket.on('OpponentAddedChar', (update: OpponentAddedChar) =>
      this.OpponentAddedChar(update)
    );
  }

  AddChar(char: string): AddedChar {
    const res = this.board.AddChar(char);
    if (typeof res === AddedChar.name) {
      this.socket.emit('AddedChar', res);
    }
    return res;
  }

  OpponentAddedChar(update: OpponentAddedChar) {
    this.board.OpponentAddedChar(update);
  }
}
