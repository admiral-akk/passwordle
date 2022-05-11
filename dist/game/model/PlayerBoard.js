"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerBoard = void 0;
const Updates_1 = require("../network/updates/Updates");
const YourBoardState_1 = require("./YourBoardState");
const YourPasswordState_1 = require("./YourPasswordState");
const OpponentBoardState_1 = require("./OpponentBoardState");
const OpponentPasswordState_1 = require("./OpponentPasswordState");
const NotificationState_1 = require("./NotificationState");
const KeyboardState_1 = require("./KeyboardState");
const TimerState_1 = require("./TimerState");
const Words_1 = require("../Words");
const EndGameState_1 = require("../../util/struct/EndGameState");
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
        this.endGame = null;
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
        return this.endGame !== null;
    }
    GameOver() {
        return this.endGame;
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
        if ((0, Updates_1.IsGameOver)(update)) {
            this.endGame = update.endGameState;
            switch ((0, Updates_1.GameOverState)(update)) {
                case EndGameState_1.EndGameState.Loss:
                    promise.then(() => this.notification.Lost());
                    break;
                case EndGameState_1.EndGameState.Win:
                    promise.then(() => this.notification.Won());
                    break;
                case EndGameState_1.EndGameState.Tie:
                    promise.then(() => this.notification.Tied());
                    break;
            }
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