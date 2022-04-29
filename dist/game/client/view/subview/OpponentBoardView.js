"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpponentBoardView = void 0;
const BoardView_1 = require("./BoardView");
class OpponentBoardView extends BoardView_1.BoardView {
    constructor(base) {
        super(base);
    }
    HintUpdate(update) {
        this.BaseHintUpdate(update);
    }
}
exports.OpponentBoardView = OpponentBoardView;
//# sourceMappingURL=OpponentBoardView.js.map