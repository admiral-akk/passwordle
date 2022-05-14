"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LockedGuessError = exports.ErrorType = exports.LockedGuess = exports.GuessLocked = exports.GameOverState = exports.IsGameOver = exports.UpdatedAnswerKnowledge = exports.Deleted = exports.AddedChar = void 0;
const EndGameState_1 = require("../../structs/EndGameState");
const TargetProgress_1 = require("../../structs/TargetProgress");
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
    constructor(playerKnowledge, opponentKnowledge, playerProgress, opponentProgress, playerPassword, opponentPassword) {
        this.playerKnowledge = playerKnowledge;
        this.opponentKnowledge = opponentKnowledge;
        this.playerProgress = playerProgress;
        this.opponentProgress = opponentProgress;
        this.endGameState = GenerateSummary(playerKnowledge, opponentKnowledge, playerProgress, opponentProgress, playerPassword, opponentPassword);
    }
}
exports.UpdatedAnswerKnowledge = UpdatedAnswerKnowledge;
function GenerateSummary(playerKnowledge, opponentKnowledge, playerProgress, opponentProgress, playerPassword, opponentPassword) {
    if (!(0, TargetProgress_1.Complete)(playerProgress) && !(0, TargetProgress_1.Complete)(opponentProgress)) {
        return undefined;
    }
    return new EndGameState_1.EndGameSummary(playerPassword, opponentPassword, playerProgress, opponentProgress);
}
function IsGameOver(knowledge) {
    return knowledge.endGameState !== undefined;
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