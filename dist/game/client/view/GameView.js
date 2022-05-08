"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameView = void 0;
const EndGameView_1 = require("./subview/EndGameView");
const KeyboardView_1 = require("./subview/KeyboardView");
const TimerView_1 = require("./subview/TimerView");
const ExplanationView_1 = require("./subview/ExplanationView");
class GameView {
    constructor() {
        const root = document.getElementById('game-board');
        this.timer = new TimerView_1.TimerView(root);
        this.keyboard = new KeyboardView_1.KeyboardView(root);
        const explain = AddDiv(root, 'explain');
        this.explanation = new ExplanationView_1.ExplanationView(explain, `Each red letter in your password is a revealed letter.\n
      Each green letter in your opponent's password is a revealed letter.\n
      Each guess you and your opponent make will reveal letters in both passwords.\n
       Win by revealing your opponent's password before they reveal yours.`);
        this.endGame = new EndGameView_1.EndGameView(root);
    }
    HintUpdate(update, updateComplete) {
        // Animated this.
    }
    GameOver(state) {
        this.endGame.GameOver(state);
    }
    Reset() {
        this.endGame.Reset();
    }
    Exit() {
        this.endGame.Exit();
        this.explanation.Exit();
    }
    WordTooShort() { }
    WordNotValid() { }
}
exports.GameView = GameView;
function AddDiv(parent, className) {
    const div = document.createElement('div');
    div.className = className;
    parent.appendChild(div);
    return div;
}
//# sourceMappingURL=GameView.js.map