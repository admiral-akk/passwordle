import {GameServerSocket} from './GameNetworkTypes';
import {ClientBoard} from '../model/ClientBoard';
import {AddedChar, OpponentAddedChar} from './updates/Updates';

export class ClientGameMirror {
  private board: ClientBoard = new ClientBoard();

  constructor(
    private socket: GameServerSocket,
    private addedChar: (update: AddedChar) => void
  ) {
    this.socket.on('AddedChar', (update: AddedChar) => this.AddedChar(update));
  }

  AddedChar(update: AddedChar) {
    this.board.AddChar(update.char);
    this.addedChar(update);
  }

  OpponentAddedChar(update: OpponentAddedChar) {
    this.board.OpponentAddedChar(update);
    this.socket.emit('OpponentAddedChar', update);
  }
}
