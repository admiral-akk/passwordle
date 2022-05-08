"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameView = void 0;
const AnimateKnowledge_1 = require("./AnimateKnowledge");
const YourPasswordView_1 = require("./subview/YourPasswordView");
const EndGameView_1 = require("./subview/EndGameView");
const KeyboardView_1 = require("./subview/KeyboardView");
const OpponentBoardView_1 = require("./subview/OpponentBoardView");
const PlayerBoardView_1 = require("./subview/PlayerBoardView");
const OpponentPasswordView_1 = require("./subview/OpponentPasswordView");
const TimerView_1 = require("./subview/TimerView");
const ExplanationView_1 = require("./subview/ExplanationView");
class GameView {
    constructor() {
        const root = document.getElementById('game-board');
        this.timer = new TimerView_1.TimerView(root);
        this.yourPassword = new YourPasswordView_1.YourPasswordView(root);
        this.opponentPassword = new OpponentPasswordView_1.OpponentPasswordView(root);
        const player = document.getElementById('player');
        this.yourBoard = new PlayerBoardView_1.YourBoardView(player);
        const opponent = document.getElementById('opponent');
        this.opponentBoard = new OpponentBoardView_1.OpponentBoardView(opponent);
        this.keyboard = new KeyboardView_1.KeyboardView(root);
        const explain = AddDiv(root, 'explain');
        this.explanation = new ExplanationView_1.ExplanationView(explain, `Each red letter in your password is a revealed letter.\n
      Each green letter in your opponent's password is a revealed letter.\n
      Each guess you and your opponent make will reveal letters in both passwords.\n
       Win by revealing your opponent's password before they reveal yours.`);
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
    Exit() {
        this.yourBoard.Exit();
        this.opponentBoard.Exit();
        this.yourPassword.Exit();
        this.opponentPassword.Exit();
        this.endGame.Exit();
        this.explanation.Exit();
    }
    OpponentUpdate(update) {
        this.opponentBoard.OpponentUpdate(update);
    }
    LockedGuessError(error) {
        this.yourBoard.SubmitError(error);
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