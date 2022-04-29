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
        this.timer = new TimerView_1.TimerView(root);
        const game = AddDiv(root, 'play-area');
        const player = AddDiv(game, 'player');
        this.answer = new AnswerView_1.AnswerView(player);
        this.playerBoard = new PlayerBoardView_1.PlayerBoardView(player);
        const opponent = AddDiv(game, 'opponent');
        this.target = new TargetView_1.TargetView(opponent);
        this.opponentBoard = new OpponentBoardView_1.OpponentBoardView(opponent);
        this.keyboard = new KeyboardView_1.KeyboardView(root);
    }
    SetSecret(secret) {
        this.answer.SetSecret(secret);
    }
    CharUpdate(update) {
        this.playerBoard.Update(update);
    }
    HintUpdate(update) {
        this.opponentBoard.HintUpdate(update);
    }
}
exports.GameView = GameView;
function AddDiv(parent, className) {
    const div = document.createElement('div');
    div.className = className;
    parent.appendChild(div);
    return div;
}
//# sourceMappingURL=GameView.js.map