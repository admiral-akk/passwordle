"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpponentBoardView = void 0;
const LetterState_1 = require("../../structs/LetterState");
const OpponentUpdate_1 = require("../OpponentUpdate");
const BoardView_1 = require("./BoardView");
class OpponentBoardView extends BoardView_1.BoardView {
    constructor(base) {
        super(base, "Opponent's Guesses");
    }
    OpponentUpdate(update) {
        switch (update.type) {
            case OpponentUpdate_1.OpponentUpdateType.AddChar:
                this.words[update.wordIndex].SetChar('', update.charIndex, LetterState_1.LetterState.LightGrey);
                break;
            case OpponentUpdate_1.OpponentUpdateType.Delete:
                this.words[update.wordIndex].SetChar('', update.charIndex, LetterState_1.LetterState.None);
                break;
        }
    }
    HintUpdate(update) {
        this.BaseHintUpdate(update.hint.opponentGuess, update.guessIndex);
    }
}
exports.OpponentBoardView = OpponentBoardView;
//# sourceMappingURL=OpponentBoardView.js.map