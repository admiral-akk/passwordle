import {
  GameClientSocket,
  GameClientToServerEvents,
  GameServerToClientEvents,
} from '../network/GameNetworkTypes';
import {
  AddedChar,
  LockedGuess,
  UpdatedAnswerKnowledge,
} from '../network/updates/Updates';
import {Word} from '../structs/Word';
import {OpponentBoardState} from './OpponentBoardState';
import {OpponentPasswordState} from './OpponentPasswordState';
import {YourBoardState} from './YourBoardState';
import {YourPasswordState} from './YourPasswordState';

export class Board
  implements GameClientToServerEvents, GameServerToClientEvents
{
  private yourBoard: YourBoardState = new YourBoardState();
  private yourPassword: YourPasswordState = new YourPasswordState();
  private opponentBoard: OpponentBoardState = new OpponentBoardState();
  private opponentPassword: OpponentPasswordState = new OpponentPasswordState();

  protected Register(socket: GameClientSocket): void {
    socket.on('OpponentAddedChar', () => this.OpponentAddedChar());
    socket.on('UpdatedAnswerKnowledge', (update: UpdatedAnswerKnowledge) =>
      this.UpdatedAnswerKnowledge(update)
    );
    socket.on('SetSecret', (secret: Word) => this.SetSecret(secret));
    socket.on('OpponentDeleted', () => this.OpponentDeleted());
    socket.on('OpponentLockedGuess', () => this.OpponentLockedGuess());
    socket.on('OpponentDisconnected', () => this.OpponentDisconnected());
  }
  protected Deregister(socket: GameClientSocket): void {
    socket.removeAllListeners('OpponentAddedChar');
    socket.removeAllListeners('UpdatedAnswerKnowledge');
    socket.removeAllListeners('SetSecret');
    socket.removeAllListeners('OpponentDeleted');
    socket.removeAllListeners('OpponentLockedGuess');
    socket.removeAllListeners('OpponentDisconnected');
  }
  constructor(private socket: GameClientSocket) {}
  OpponentAddedChar() {
    this.opponentBoard.OpponentAddedChar();
  }
  OpponentDeleted() {
    this.opponentBoard.OpponentDeleted();
  }
  OpponentLockedGuess() {
    this.opponentBoard.OpponentLockedGuess();
  }
  UpdatedAnswerKnowledge(update: UpdatedAnswerKnowledge) {}
  OpponentDisconnected() {}

  SetSecret(secret: Word) {
    this.yourPassword.SetPassword(secret);
  }
  AddedChar(update: AddedChar) {
    const attempt = this.yourBoard.AttemptAddChar(update.char);
    if (attempt) {
      this.yourBoard.AddChar(update.char);
      this.socket.emit('AddedChar', update);
    }
  }
  Deleted() {
    const attempt = this.yourBoard.AttemptDelete();
    if (attempt) {
      this.yourBoard.Delete();
      this.socket.emit('Deleted');
    }
  }
  LockedGuess(update: LockedGuess) {
    const attempt = this.yourBoard.AttemptLockedGuess();
    if (attempt) {
      const word = this.yourBoard.LockedGuess();
      this.socket.emit('LockedGuess', new LockedGuess(word));
    }
  }
}
