"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameView = void 0;
const AnswerView_1 = require("./subview/AnswerView");
const BoardView_1 = require("./subview/BoardView");
const KeyboardView_1 = require("./subview/KeyboardView");
const TimerView_1 = require("./subview/TimerView");
class GameView {
    constructor() {
        this.answer = new AnswerView_1.AnswerView();
        this.board = new BoardView_1.BoardView();
        this.keyboard = new KeyboardView_1.KeyboardView();
        this.timer = new TimerView_1.TimerView();
    }
    Start() { }
}
exports.GameView = GameView;
//# sourceMappingURL=GameView.js.map