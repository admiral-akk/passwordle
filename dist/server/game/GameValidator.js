"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameActionEmitter = exports.GameValidator = void 0;
// Validator: Takes Action, State, validates and emits Action. Cannot change state.
class GameValidator {
    constructor(state, emitter, playerId) {
        this.state = state;
        this.emitter = emitter;
        this.playerId = playerId;
    }
    AddChar(update) {
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
exports.GameValidator = GameValidator;
class GameActionEmitter {
    constructor(socket) {
        this.socket = socket;
    }
    AddChar(update) {
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
exports.GameActionEmitter = GameActionEmitter;
//# sourceMappingURL=GameValidator.js.map