"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndGameSummary = exports.EndGameState = void 0;
var EndGameState;
(function (EndGameState) {
    EndGameState[EndGameState["None"] = 0] = "None";
    EndGameState[EndGameState["Win"] = 1] = "Win";
    EndGameState[EndGameState["Loss"] = 2] = "Loss";
    EndGameState[EndGameState["Tie"] = 3] = "Tie";
    EndGameState[EndGameState["Disconnected"] = 4] = "Disconnected";
})(EndGameState = exports.EndGameState || (exports.EndGameState = {}));
class EndGameSummary {
    constructor(yourPassword, opponentPassword, yourProgress, opponentProgress, endState) {
        this.yourPassword = yourPassword;
        this.opponentPassword = opponentPassword;
        this.yourProgress = yourProgress;
        this.opponentProgress = opponentProgress;
        this.endState = endState;
    }
}
exports.EndGameSummary = EndGameSummary;
//# sourceMappingURL=EndGameState.js.map