import {
  GameServerSocket,
  NewGameClientToServerEvents,
  NewGameServerToClientEvents,
} from './GameNetworkTypes';
import {PlayerBoard} from '../model/PlayerBoard';
import {AddedChar, UpdatedAnswerKnowledge} from './updates/Updates';

export class ClientGameMirror
  implements NewGameClientToServerEvents, NewGameServerToClientEvents
{
  private board: PlayerBoard = new PlayerBoard();

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

  UpdatedAnswerKnowledge(update: UpdatedAnswerKnowledge) {
    this.board.UpdatedAnswerKnowledge(update);
    this.socket.emit('UpdatedAnswerKnowledge', update);
  }
}
