"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerStates = void 0;
class PlayerStates {
    constructor(state, playerId) {
        this.playerMoves = state.moves.filter(move => move.move.player === playerId);
        this.opponentMoves = state.moves.filter(move => move.move.player !== playerId);
    }
}
exports.PlayerStates = PlayerStates;
//# sourceMappingURL=PlayerStates.js.map