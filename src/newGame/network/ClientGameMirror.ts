import {
  GameServerSocket,
  NewGameClientToServerEvents,
  NewGameServerToClientEvents,
} from './GameNetworkTypes';
import {PlayerBoard} from '../model/PlayerBoard';
import {AddedChar, Submitted, UpdatedAnswerKnowledge} from './updates/Updates';

export class ClientGameMirror
  implements NewGameClientToServerEvents, NewGameServerToClientEvents
{
  private board: PlayerBoard = new PlayerBoard();
  private otherPlayer: NewGameServerToClientEvents | null = null;

  constructor(private socket: GameServerSocket) {
    this.socket.on('AddedChar', (update: AddedChar) => this.AddedChar(update));
  }
  OpponentSubmitted() {}

  Submitted(update: Submitted) {
    this.board.Submitted(update);
    this.socket.emit('OpponentSubmitted');
  }

  RegisterOtherPlayer(otherPlayer: ClientGameMirror) {
    this.otherPlayer = otherPlayer;
  }

  Deleted() {
    this.board.Deleted();
    this.otherPlayer?.OpponentDeleted();
  }

  AddedChar(update: AddedChar) {
    this.board.AddedChar(update);
    this.otherPlayer?.OpponentAddedChar();
  }

  OpponentDeleted() {
    this.board.OpponentDeleted();
    this.socket.emit('OpponentDeleted');
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
