"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LockedGuess = exports.UpdatedAnswerKnowledge = exports.Deleted = exports.AddedChar = void 0;
class AddedChar {
    constructor(char) {
        this.char = char;
    }
}
exports.AddedChar = AddedChar;
class Deleted {
}
exports.Deleted = Deleted;
class UpdatedAnswerKnowledge {
    constructor(playerKnowledge, opponentKnowledge, playerProgress, opponentProgress) {
        this.playerKnowledge = playerKnowledge;
        this.opponentKnowledge = opponentKnowledge;
        this.playerProgress = playerProgress;
        this.opponentProgress = opponentProgress;
    }
}
exports.UpdatedAnswerKnowledge = UpdatedAnswerKnowledge;
class LockedGuess {
    constructor(guess) {
        this.guess = guess;
    }
}
exports.LockedGuess = LockedGuess;
//# sourceMappingURL=Updates.js.map