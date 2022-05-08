"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpponentBoardState = void 0;
const BoardState_1 = require("../model/BoardState");
class OpponentBoardState extends BoardState_1.BoardState {
    constructor() {
        super(...arguments);
        this.view = new OpponentBoardView();
    }
    OpponentAddedChar() {
        this.view.OpponentAddedChar();
    }
    OpponentDeleted() {
        this.view.OpponentDeleted();
    }
    OpponentLockedGuess() {
        this.view.OpponentLockedGuess();
    }
}
exports.OpponentBoardState = OpponentBoardState;
class OpponentBoardView {
    OpponentAddedChar() { }
    OpponentDeleted() { }
    OpponentLockedGuess() { }
}
//# sourceMappingURL=OpponentBoardState.js.map