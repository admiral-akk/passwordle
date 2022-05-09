import {
  GameServerSocket,
  GameClientToServerEvents,
  GameServerToClientEvents,
} from './GameNetworkTypes';
import {PlayerBoard} from '../model/PlayerBoard';
import {
  AddedChar,
  LockedGuess,
  UpdatedAnswerKnowledge,
} from './updates/Updates';
import {Word} from '../structs/Word';

export class ClientGameMirror
  implements GameClientToServerEvents, GameServerToClientEvents
{
  private secret: Word | null = null;
  private board: PlayerBoard = new PlayerBoard();
  private otherPlayer: ClientGameMirror | null = null;
  private lockedGuessCallback: (update: LockedGuess) => void = () => {};

  constructor(private socket: GameServerSocket) {
    this.socket.removeAllListeners('AddedChar');
    this.socket.removeAllListeners('Deleted');
    this.socket.removeAllListeners('LockedGuess');
    this.socket.removeAllListeners('GameClientReady');
    this.socket.on('AddedChar', (update: AddedChar) => this.AddedChar(update));
    this.socket.on('Deleted', () => this.Deleted());
    this.socket.on('LockedGuess', (update: LockedGuess) =>
      this.LockedGuess(update)
    );
    this.socket.on('GameClientReady', () => this.GameClientReady());
  }

  GameClientReady() {
    this.socket.emit('SetSecret', this.secret!);
  }

  OpponentDisconnected() {}

  SetSecret(secret: Word) {
    this.board.SetSecret(secret);
    this.secret = secret;
  }

  OpponentLockedGuess() {
    this.board.OpponentLockedGuess();
    this.socket.emit('OpponentLockedGuess');
  }

  LockedGuess(update: LockedGuess) {
    this.board.LockedGuess();
    this.otherPlayer?.OpponentLockedGuess();
    this.lockedGuessCallback(update);
  }

  RegisterOtherPlayer(otherPlayer: ClientGameMirror) {
    this.otherPlayer = otherPlayer;
  }

  RegisterLockedGuess(callback: (update: LockedGuess) => void) {
    this.lockedGuessCallback = callback;
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
