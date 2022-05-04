import {GameServerSocket} from './GameNetworkTypes';
import {ClientBoard} from '../model/ClientBoard';
import {AddedChar, UpdatedAnswerKnowledge} from './updates/Updates';

export class ClientGameMirror {
  private board: ClientBoard = new ClientBoard();

  constructor(
    private socket: GameServerSocket,
    private addedChar: (update: AddedChar) => void,
    private ready: () => void
  ) {
    this.socket.on('AddedChar', (update: AddedChar) => this.AddedChar(update));
    this.socket.on('Ready', () => this.Ready());
  }

  AddedChar(update: AddedChar) {
    this.board.AddChar(update.char);
    this.addedChar(update);
  }

  OpponentAddedChar() {
    this.board.OpponentAddedChar();
    this.socket.emit('OpponentAddedChar');
  }

  Ready() {
    this.board.Ready();
    this.ready();
  }

  IsReady(): boolean {
    return this.board.IsReady();
  }

  AnswerKnowledgeUpdated(update: UpdatedAnswerKnowledge) {
    this.board.UpdatedAnswerKnowledge(update);
    this.socket.emit('UpdatedAnswerKnowledge', update);
  }
}
