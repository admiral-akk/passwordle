"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerBoardView = void 0;
const BoardView_1 = require("./BoardView");
class PlayerBoardView extends BoardView_1.BoardView {
    constructor(base) {
        super(base, 'Your Guesses');
    }
    Update(update) {
        this.BaseUpdate(update);
    }
    HintUpdate(update) {
        this.BaseHintUpdate(update.hint.playerGuess, update.guessIndex);
    }
}
exports.PlayerBoardView = PlayerBoardView;
//# sourceMappingURL=PlayerBoardView.js.map