"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameView = void 0;
const AnimateKnowledge_1 = require("./AnimateKnowledge");
const YourPasswordView_1 = require("./subview/YourPasswordView");
const EndGameView_1 = require("./subview/EndGameView");
const KeyboardView_1 = require("./subview/KeyboardView");
const OpponentBoardView_1 = require("./subview/OpponentBoardView");
const PlayerBoardView_1 = require("./subview/PlayerBoardView");
const Subview_1 = require("./subview/Subview");
const OpponentPasswordView_1 = require("./subview/OpponentPasswordView");
const TimerView_1 = require("./subview/TimerView");
class GameView {
    constructor() {
        const root = document.getElementById('game-board');
        this.timer = new TimerView_1.TimerView(root);
        this.yourPassword = new YourPasswordView_1.YourPasswordView(root);
        this.opponentPassword = new OpponentPasswordView_1.OpponentPasswordView(root);
        const game = AddDiv(root, 'play-area');
        const player = AddDiv(game, 'player');
        this.yourBoard = new PlayerBoardView_1.YourBoardView(player);
        const opponent = AddDiv(game, 'opponent');
        this.opponentBoard = new OpponentBoardView_1.OpponentBoardView(opponent);
        this.keyboard = new KeyboardView_1.KeyboardView(root);
        const explain = AddDiv(root, 'explain');
        new Subview_1.ExplanationView(explain, `Each guess made fills both the top and bottom block.\n
       The winner is the first to fill the hidden word that their opponent knows.`);
        this.endGame = new EndGameView_1.EndGameView(root);
    }
    SetSecret(secret) {
        this.yourPassword.SetSecret(secret);
    }
    CharUpdate(update) {
        this.yourBoard.CharUpdate(update);
    }
    HintUpdate(update, updateComplete) {
        // Animated this.
        (0, AnimateKnowledge_1.AnimateHint)(update, this.yourBoard, this.opponentBoard, this.yourPassword, this.opponentPassword, updateComplete);
    }
    GameOver(state) {
        this.endGame.GameOver(state);
    }
    Reset() {
        this.yourBoard.Reset();
        this.opponentBoard.Reset();
        this.yourPassword.Reset();
        this.opponentPassword.Reset();
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