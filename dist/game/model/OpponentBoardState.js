"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpponentBoardState = void 0;
const OpponentUpdate_1 = require("./OpponentUpdate");
const OpponentBoardView_1 = require("./view/OpponentBoardView");
const Word_1 = require("../structs/Word");
class OpponentBoardState {
    constructor(hasView) {
        this.guesses = [];
        this.opponentCharCount = 0;
        this.view = null;
        if (hasView) {
            this.view = new OpponentBoardView_1.OpponentBoardView();
        }
    }
    OpponentAddedChar() {
        var _a;
        const update = new OpponentUpdate_1.OpponentUpdate(OpponentUpdate_1.OpponentUpdateType.AddChar, this.guesses.length, this.opponentCharCount);
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.OpponentUpdate(update);
        this.opponentCharCount++;
    }
    OpponentDeleted() {
        var _a;
        this.opponentCharCount--;
        const update = new OpponentUpdate_1.OpponentUpdate(OpponentUpdate_1.OpponentUpdateType.Delete, this.guesses.length, this.opponentCharCount);
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.OpponentUpdate(update);
    }
    OpponentLockedGuess() {
        var _a;
        this.opponentCharCount = 0;
        const update = new OpponentUpdate_1.OpponentUpdate(OpponentUpdate_1.OpponentUpdateType.Submit, this.guesses.length, this.opponentCharCount);
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.OpponentUpdate(update);
    }
    Update(knowledge) {
        var _a;
        this.guesses.push((0, Word_1.ToWord)(knowledge.guess));
        for (let i = 0; i < knowledge.guess.length; i++) {
            (_a = this.view) === null || _a === void 0 ? void 0 : _a.SetCharKnowledge(this.guesses.length - 1, i, knowledge.guess[i], knowledge.letterKnowledge[i]);
        }
    }
    Exit() {
        var _a;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.Exit();
    }
    Reset() {
        this.guesses = [];
        this.opponentCharCount = 0;
    }
}
exports.OpponentBoardState = OpponentBoardState;
//# sourceMappingURL=OpponentBoardState.js.map