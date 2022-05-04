"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Submitted = exports.UpdatedAnswerKnowledge = exports.Deleted = exports.AddedChar = void 0;
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
    constructor(playerWord) {
        this.playerWord = playerWord;
    }
}
exports.UpdatedAnswerKnowledge = UpdatedAnswerKnowledge;
class Submitted {
    constructor(guess) {
        this.guess = guess;
    }
}
exports.Submitted = Submitted;
//# sourceMappingURL=Updates.js.map