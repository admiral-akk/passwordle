"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameView = void 0;
const KeyboardView_1 = require("./KeyboardView");
const OpponentBoardView_1 = require("./OpponentBoardView");
const OpponentPasswordView_1 = require("./OpponentPasswordView");
const Subview_1 = require("./Subview");
const TimerView_1 = require("./TimerView");
const YourBoardView_1 = require("./YourBoardView");
const YourPasswordView_1 = require("./YourPasswordView");
class GameView extends Subview_1.Subview {
    constructor(base, className = 'game-container') {
        super(base, className);
        this.gameboard = this.AddDiv(this.root, 'game-board');
        this.timer = new TimerView_1.TimerView(this.AddDiv(this.gameboard, 'timer-container'));
        this.yourPassword = new YourPasswordView_1.YourPasswordView(this.AddDiv(this.gameboard, 'answer-container'));
        this.opponentPassword = new OpponentPasswordView_1.OpponentPasswordView(this.AddDiv(this.gameboard, 'target-container'));
        this.playArea = this.AddDiv(this.gameboard, 'play-area');
        this.yourBoard = new YourBoardView_1.YourBoardView(this.AddDiv(this.playArea, 'player'));
        this.opponentBoard = new OpponentBoardView_1.OpponentBoardView(this.AddDiv(this.playArea, 'opponent'));
        this.keyboard = new KeyboardView_1.KeyboardView(this.gameboard);
    }
}
exports.GameView = GameView;
//# sourceMappingURL=GameView.js.map