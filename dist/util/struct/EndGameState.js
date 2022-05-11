"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetEndGameState = exports.EndGameSummary = exports.EndGameState = void 0;
const TargetProgress_1 = require("../../game/client/structs/TargetProgress");
var EndGameState;
(function (EndGameState) {
    EndGameState[EndGameState["None"] = 0] = "None";
    EndGameState[EndGameState["Win"] = 1] = "Win";
    EndGameState[EndGameState["Loss"] = 2] = "Loss";
    EndGameState[EndGameState["Tie"] = 3] = "Tie";
})(EndGameState = exports.EndGameState || (exports.EndGameState = {}));
class EndGameSummary {
    constructor(yourPassword, opponentPassword, yourProgress, opponentProgress) {
        this.yourPassword = yourPassword;
        this.opponentPassword = opponentPassword;
        this.yourProgress = yourProgress;
        this.opponentProgress = opponentProgress;
    }
}
exports.EndGameSummary = EndGameSummary;
function GetEndGameState(summary) {
    const playerComplete = (0, TargetProgress_1.Complete)(summary.yourProgress);
    const opponentComplete = (0, TargetProgress_1.Complete)(summary.opponentProgress);
    if (playerComplete === opponentComplete) {
        return EndGameState.Tie;
    }
    if (playerComplete) {
        return EndGameState.Win;
    }
    return EndGameState.Loss;
}
exports.GetEndGameState = GetEndGameState;
//# sourceMappingURL=EndGameState.js.map