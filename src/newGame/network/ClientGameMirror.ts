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
    private addedChar: (update: AddedChar) => void
  ) {
    this.socket.on('AddedChar', (update: AddedChar) => this.AddedChar(update));
  }

  AddedChar(update: AddedChar) {
    this.board.AddChar(update.char);
    this.addedChar(update);
  }

  OpponentAddedChar() {
    this.board.OpponentAddedChar();
    this.socket.emit('OpponentAddedChar');
  }

  UpdatedAnswerKnowledge(update: UpdatedAnswerKnowledge) {
    this.board.UpdatedAnswerKnowledge(update);
    this.socket.emit('UpdatedAnswerKnowledge', update);
  }
}
