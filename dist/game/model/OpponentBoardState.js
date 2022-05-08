"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpponentBoardState = void 0;
const OpponentUpdate_1 = require("../client/view/OpponentUpdate");
const OpponentBoardView_1 = require("../client/view/subview/OpponentBoardView");
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