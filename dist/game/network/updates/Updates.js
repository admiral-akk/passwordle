"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loss = exports.Win = exports.Tie = exports.Gameover = exports.LockedGuess = exports.UpdatedAnswerKnowledge = exports.Deleted = exports.AddedChar = void 0;
const TargetProgress_1 = require("../../client/structs/TargetProgress");
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
function Gameover(update) {
    return (0, TargetProgress_1.Complete)(update.playerProgress) || (0, TargetProgress_1.Complete)(update.opponentProgress);
}
exports.Gameover = Gameover;
function Tie(update) {
    return (0, TargetProgress_1.Complete)(update.playerProgress) && (0, TargetProgress_1.Complete)(update.opponentProgress);
}
exports.Tie = Tie;
function Win(update) {
    return !Tie(update) && (0, TargetProgress_1.Complete)(update.opponentProgress);
}
exports.Win = Win;
function Loss(update) {
    return !Tie(update) && (0, TargetProgress_1.Complete)(update.playerProgress);
}
exports.Loss = Loss;
//# sourceMappingURL=Updates.js.map