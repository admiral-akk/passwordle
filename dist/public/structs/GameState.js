"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameState = void 0;
class GameState {
    constructor(startingPlayer) {
        this.moves = [];
        this.playerToMove = startingPlayer;
    }
    AddMove(move, opponent) {
        this.moves.push(move);
        this.playerToMove = opponent;
    }
}
exports.GameState = GameState;
//# sourceMappingURL=GameState.js.map