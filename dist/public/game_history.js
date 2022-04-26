"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.History = exports.Move = void 0;
class Move {
    constructor(guess, knowledge) {
        this.guess = guess;
        this.knowledge = knowledge;
    }
}
exports.Move = Move;
class History {
    constructor() {
        this.history = [];
    }
    Add(guess, knowledge) {
        this.history.push(new Move(guess, knowledge));
    }
}
exports.History = History;
//# sourceMappingURL=game_history.js.map