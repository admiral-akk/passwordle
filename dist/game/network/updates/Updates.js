"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LockedGuessError = exports.ErrorType = exports.LockedGuess = exports.GuessLocked = exports.GameOverState = exports.IsGameOver = exports.UpdatedAnswerKnowledge = exports.Deleted = exports.AddedChar = void 0;
const EndGameState_1 = require("../../../util/struct/EndGameState");
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
    constructor(playerKnowledge, opponentKnowledge, playerProgress, opponentProgress, endGameState) {
        this.playerKnowledge = playerKnowledge;
        this.opponentKnowledge = opponentKnowledge;
        this.playerProgress = playerProgress;
        this.opponentProgress = opponentProgress;
        this.endGameState = endGameState;
    }
}
exports.UpdatedAnswerKnowledge = UpdatedAnswerKnowledge;
function IsGameOver(knowledge) {
    return knowledge.endGameState !== null;
}
exports.IsGameOver = IsGameOver;
function GameOverState(knowledge) {
    return (0, EndGameState_1.GetEndGameState)(knowledge.endGameState);
}
exports.GameOverState = GameOverState;
class GuessLocked {
    constructor(index) {
        this.index = index;
    }
}
exports.GuessLocked = GuessLocked;
class LockedGuess {
    constructor(guess) {
        this.guess = guess;
    }
}
exports.LockedGuess = LockedGuess;
var ErrorType;
(function (ErrorType) {
    ErrorType[ErrorType["None"] = 0] = "None";
    ErrorType[ErrorType["TooShort"] = 1] = "TooShort";
    ErrorType[ErrorType["NotValidWord"] = 2] = "NotValidWord";
})(ErrorType = exports.ErrorType || (exports.ErrorType = {}));
class LockedGuessError {
    constructor(type, wordIndex, wordLength) {
        this.type = type;
        this.wordIndex = wordIndex;
        this.wordLength = wordLength;
    }
}
exports.LockedGuessError = LockedGuessError;
//# sourceMappingURL=Updates.js.map