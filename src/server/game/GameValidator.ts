import {ImmutableGameState} from '../../game/model/GameState';
import {AddedChar} from '../../game/network/Updates';
import {GameActions, GameClientSocket} from '../../network/GameNetworkTypes';
import {PlayerId} from '../../structs/PlayerId';

// Validator: Takes Action, State, validates and emits Action. Cannot change state.
export class GameValidator implements GameActions {
  constructor(
    private state: ImmutableGameState,
    private emitter: GameActions,
    private playerId?: PlayerId
  ) {}
  AddChar(update: AddedChar) {
    if (this.state.CanAddChar(update)) {
      this.emitter.AddChar(update, this.playerId);
    }
  }
  Delete() {
    if (this.state.CanDelete()) {
      this.emitter.Delete(this.playerId);
    }
  }
  LockGuess() {
    if (this.state.CanLockGuess()) {
      this.emitter.LockGuess(this.playerId);
    }
  }
  GameClientReady() {
    if (this.state.IsReadyForNewGame()) {
      this.emitter.GameClientReady(this.playerId);
    }
  }
}

export class GameActionEmitter implements GameActions {
  constructor(private socket: GameClientSocket) {}
  AddChar(update: AddedChar) {
    this.socket.emit('AddChar', update);
  }
  Delete() {
    this.socket.emit('Delete');
  }
  LockGuess() {
    this.socket.emit('LockGuess');
  }
  GameClientReady() {
    this.socket.emit('GameClientReady');
  }
}
