"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameValidator = void 0;
// Validator: Takes Action, State, validates and emits Action. Cannot change state.
class GameValidator {
    constructor(playerId, state, emitter) {
        this.playerId = playerId;
        this.state = state;
        this.emitter = emitter;
        this.AddedChar = (update) => {
            this.emitter.AddedChar(update, this.playerId);
        };
        this.Deleted = () => {
            this.emitter.Deleted(this.playerId);
        };
        this.LockedGuess = (update) => {
            this.emitter.LockedGuess(update, this.playerId);
        };
        this.GameClientReady = () => {
            this.emitter.GameClientReady(this.playerId);
        };
    }
}
exports.GameValidator = GameValidator;
//# sourceMappingURL=GameValidator.js.map