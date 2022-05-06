"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameView = void 0;
const AnimateKnowledge_1 = require("./AnimateKnowledge");
const AnswerView_1 = require("./subview/AnswerView");
const EndGameView_1 = require("./subview/EndGameView");
const KeyboardView_1 = require("./subview/KeyboardView");
const OpponentBoardView_1 = require("./subview/OpponentBoardView");
const PlayerBoardView_1 = require("./subview/PlayerBoardView");
const Subview_1 = require("./subview/Subview");
const TargetView_1 = require("./subview/TargetView");
const TimerView_1 = require("./subview/TimerView");
class GameView {
    constructor() {
        const root = document.getElementById('game-board');
        this.timer = new TimerView_1.TimerView(root);
        this.answer = new AnswerView_1.AnswerView(root);
        this.target = new TargetView_1.TargetView(root);
        const game = AddDiv(root, 'play-area');
        const player = AddDiv(game, 'player');
        this.playerBoard = new PlayerBoardView_1.PlayerBoardView(player);
        const opponent = AddDiv(game, 'opponent');
        this.opponentBoard = new OpponentBoardView_1.OpponentBoardView(opponent);
        this.keyboard = new KeyboardView_1.KeyboardView(root);
        const explain = AddDiv(root, 'explain');
        new Subview_1.ExplanationView(explain, `Each guess made fills both the top and bottom block.\n
       The winner is the first to fill the hidden word that their opponent knows.`);
        this.endGame = new EndGameView_1.EndGameView(root);
    }
    SetSecret(secret) {
        this.answer.SetSecret(secret);
    }
    CharUpdate(update) {
        this.playerBoard.CharUpdate(update);
    }
    HintUpdate(update) {
        // Animated this.
        (0, AnimateKnowledge_1.AnimateHint)(update, 0, this.playerBoard, this.opponentBoard, this.answer, this.target);
    }
    GameOver(won) {
        this.endGame.GameOver(won);
    }
    Reset() {
        this.playerBoard.Reset();
        this.opponentBoard.Reset();
        this.answer.Reset();
        this.target.Reset();
        this.endGame.Reset();
    }
    OpponentUpdate(update) {
        this.opponentBoard.OpponentUpdate(update);
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