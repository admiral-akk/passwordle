"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameView = void 0;
const AnswerView_1 = require("./subview/AnswerView");
const KeyboardView_1 = require("./subview/KeyboardView");
const OpponentBoardView_1 = require("./subview/OpponentBoardView");
const PlayerBoardView_1 = require("./subview/PlayerBoardView");
const TargetView_1 = require("./subview/TargetView");
const TimerView_1 = require("./subview/TimerView");
class GameView {
    constructor() {
        const root = document.getElementById('game-board');
        const game = AddDiv(root, 'board');
        const timer = AddDiv(game, 'timer');
        this.timer = new TimerView_1.TimerView(timer);
        const player = AddDiv(game, 'player');
        const answer = AddDiv(player, 'answer');
        this.answer = new AnswerView_1.AnswerView(answer);
        const playerBoard = AddDiv(player, 'board');
        this.playerBoard = new PlayerBoardView_1.PlayerBoardView(playerBoard);
        const opponent = AddDiv(game, 'opponent');
        const target = AddDiv(opponent, 'target');
        this.target = new TargetView_1.TargetView(target);
        const opponentBoard = AddDiv(opponent, 'board');
        this.opponentBoard = new OpponentBoardView_1.OpponentBoardView(opponentBoard);
        const keyboard = AddDiv(root, 'keyboard');
        this.keyboard = new KeyboardView_1.KeyboardView(keyboard);
    }
    Start() { }
}
exports.GameView = GameView;
function AddDiv(parent, className) {
    const div = document.createElement('div');
    div.className = className;
    parent.appendChild(div);
    return div;
}
//# sourceMappingURL=GameView.js.map