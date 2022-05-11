"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerBoard = exports.GameOverState = void 0;
const YourBoardState_1 = require("./YourBoardState");
const YourPasswordState_1 = require("./YourPasswordState");
const OpponentBoardState_1 = require("./OpponentBoardState");
const OpponentPasswordState_1 = require("./OpponentPasswordState");
const NotificationState_1 = require("./NotificationState");
const KeyboardState_1 = require("./KeyboardState");
const TimerState_1 = require("./TimerState");
const Words_1 = require("../Words");
var GameOverState;
(function (GameOverState) {
    GameOverState[GameOverState["None"] = 0] = "None";
    GameOverState[GameOverState["Win"] = 1] = "Win";
    GameOverState[GameOverState["Loss"] = 2] = "Loss";
    GameOverState[GameOverState["Tie"] = 3] = "Tie";
    GameOverState[GameOverState["OpponentDisconnected"] = 4] = "OpponentDisconnected";
})(GameOverState = exports.GameOverState || (exports.GameOverState = {}));
class PlayerBoard {
    constructor(hasView = false, input = () => { }) {
        this.hasView = hasView;
        this.input = input;
        this.yourBoard = new YourBoardState_1.YourBoardState(this.hasView);
        this.yourPassword = new YourPasswordState_1.YourPasswordState(this.hasView);
        this.opponentBoard = new OpponentBoardState_1.OpponentBoardState(this.hasView);
        this.opponentPassword = new OpponentPasswordState_1.OpponentPasswordState(this.hasView);
        this.notification = new NotificationState_1.NotificationState(this.hasView);
        this.keyboard = new KeyboardState_1.KeyboardState(this.hasView, this.input);
        this.timer = new TimerState_1.TimerState(this.hasView, () => this.TimerExhausted());
    }
    Reset() {
        this.yourBoard.Reset();
        this.yourPassword.Reset();
        this.opponentBoard.Reset();
        this.opponentPassword.Reset();
        this.notification.Reset();
        this.keyboard.Reset();
        this.timer.Reset();
    }
    Exit() {
        this.yourBoard.Exit();
        this.yourPassword.Exit();
        this.opponentBoard.Exit();
        this.opponentPassword.Exit();
        this.notification.Exit();
        this.keyboard.Exit();
        this.timer.Exit();
    }
    GameClientReady() { }
    OpponentDisconnected() { }
    TimerExhausted() {
        const randomGuess = (0, Words_1.GetRandomGuess)();
        for (let i = 0; i < randomGuess.length; i++) {
            this.input('DEL');
        }
        for (let i = 0; i < randomGuess.length; i++) {
            this.input(randomGuess[i]);
        }
        this.input('ENT');
    }
    AddedChar(update) {
        return this.yourBoard.AddChar(update.char);
    }
    Deleted() {
        return this.yourBoard.Delete();
    }
    LockedGuess() {
        const res = this.yourBoard.LockedGuess();
        if (res) {
            this.timer.LockedGuess();
        }
        return res;
    }
    IsGameOver() {
        return this.GameOver() !== GameOverState.None;
    }
    GameOver() {
        if (this.yourPassword.Lost() && this.opponentPassword.Won()) {
            return GameOverState.Tie;
        }
        if (this.yourPassword.Lost() && !this.opponentPassword.Won()) {
            return GameOverState.Loss;
        }
        if (!this.yourPassword.Lost() && this.opponentPassword.Won()) {
            return GameOverState.Win;
        }
        if (this.yourBoard.GuessCount() === 6) {
            return GameOverState.Tie;
        }
        return GameOverState.None;
    }
    OpponentAddedChar() {
        this.opponentBoard.OpponentAddedChar();
    }
    OpponentDeleted() {
        this.opponentBoard.OpponentDeleted();
    }
    OpponentLockedGuess() {
        this.opponentBoard.OpponentLockedGuess();
        this.timer.OpponentSubmitted();
    }
    UpdatedAnswerKnowledge(update) {
        // Gather animations
        this.timer.UpdateKnowledge();
        const animations = [];
        animations.push(...this.yourBoard.Update(update.playerKnowledge));
        animations.push(...this.opponentBoard.Update(update.opponentKnowledge));
        animations.push(...this.yourPassword.Update(update.playerProgress, update.playerKnowledge.guess));
        animations.push(...this.opponentPassword.Update(update.opponentProgress, update.playerKnowledge.guess));
        this.keyboard.Update([update.playerKnowledge, update.opponentKnowledge]);
        // Sequence them
        const sequence = {};
        animations.forEach(animation => {
            const index = animation.letterIndex;
            if (!(index in sequence)) {
                sequence[index] = [];
            }
            sequence[index].push(animation.animationStart);
        });
        // String them into a promise
        let promise = new Promise(resolve => resolve());
        for (let i = 0; i < 10; i++) {
            if (!(i in sequence)) {
                continue;
            }
            sequence[i].forEach(animationCallback => {
                promise = promise.then(() => {
                    animationCallback();
                    return Promise.resolve();
                });
            });
            promise = promise.then(() => new Promise(resolve => setTimeout(resolve, 400)));
        }
        // Check if the game is over
        const gameOverState = this.GameOver();
        switch (gameOverState) {
            case GameOverState.Loss:
                promise.then(() => this.notification.Lost());
                break;
            case GameOverState.Win:
                promise.then(() => this.notification.Won());
                break;
            case GameOverState.Tie:
                promise.then(() => this.notification.Tied());
                break;
        }
        return promise;
    }
    SetSecret(secret) {
        this.Reset();
        this.yourPassword.SetPassword(secret);
    }
}
exports.PlayerBoard = PlayerBoard;
//# sourceMappingURL=PlayerBoard.js.map