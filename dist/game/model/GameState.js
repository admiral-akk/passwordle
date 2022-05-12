"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameState = void 0;
const Updates_1 = require("../network/updates/Updates");
const YourBoardState_1 = require("./YourBoardState");
const YourPasswordState_1 = require("./YourPasswordState");
const OpponentBoardState_1 = require("./OpponentBoardState");
const OpponentPasswordState_1 = require("./OpponentPasswordState");
const KeyboardState_1 = require("./KeyboardState");
const TimerState_1 = require("./TimerState");
const Words_1 = require("../Words");
const GameView_1 = require("./view/GameView");
var State;
(function (State) {
    State[State["None"] = 0] = "None";
    State[State["SubmissionOpen"] = 1] = "SubmissionOpen";
    State[State["GuessSubmitted"] = 2] = "GuessSubmitted";
    State[State["RevealingHints"] = 3] = "RevealingHints";
    State[State["GameOver"] = 4] = "GameOver";
})(State || (State = {}));
class GameState {
    constructor(viewRoot, input = () => { }, submitRandomGuess = () => { }) {
        this.input = input;
        this.submitRandomGuess = submitRandomGuess;
        this.state = State.None;
        this.endGame = null;
        if (viewRoot) {
            this.view = new GameView_1.GameView(viewRoot);
            this.yourBoard = new YourBoardState_1.YourBoardState(this.view.yourBoard);
            this.yourPassword = new YourPasswordState_1.YourPasswordState(this.view.yourPassword);
            this.opponentBoard = new OpponentBoardState_1.OpponentBoardState(this.view.opponentBoard);
            this.opponentPassword = new OpponentPasswordState_1.OpponentPasswordState(this.view.opponentPassword);
            this.keyboard = new KeyboardState_1.KeyboardState(this.view.keyboard, this.input);
            this.timer = new TimerState_1.TimerState(this.view.timer, () => this.TimerExhausted());
        }
        else {
            this.yourBoard = new YourBoardState_1.YourBoardState();
            this.yourPassword = new YourPasswordState_1.YourPasswordState();
            this.opponentBoard = new OpponentBoardState_1.OpponentBoardState();
            this.opponentPassword = new OpponentPasswordState_1.OpponentPasswordState();
            this.keyboard = new KeyboardState_1.KeyboardState();
            this.timer = new TimerState_1.TimerState();
        }
    }
    Exit() {
        var _a;
        this.yourBoard.Exit();
        this.yourPassword.Exit();
        this.opponentBoard.Exit();
        this.opponentPassword.Exit();
        this.keyboard.Exit();
        this.timer.Exit();
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.Exit();
    }
    GameClientReady() { }
    OpponentDisconnected() { }
    TimerExhausted() {
        this.submitRandomGuess((0, Words_1.GetRandomGuess)(), this.yourBoard.CurrentGuessLength());
    }
    AddedChar(update) {
        if (this.state !== State.SubmissionOpen) {
            return false;
        }
        return this.yourBoard.AddChar(update.char);
    }
    Deleted() {
        if (this.state !== State.SubmissionOpen) {
            return false;
        }
        return this.yourBoard.Delete();
    }
    LockedGuess() {
        if (this.state !== State.SubmissionOpen) {
            return null;
        }
        const res = this.yourBoard.LockedGuess();
        if (res) {
            this.timer.LockedGuess();
            this.state = State.GuessSubmitted;
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
        this.state = State.RevealingHints;
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
            this.state = State.GameOver;
        }
        else {
            // Enable submission
            promise = promise.then(() => {
                this.state = State.SubmissionOpen;
                return Promise.resolve();
            });
        }
        return promise;
    }
    SetSecret(secret) {
        this.yourPassword.SetPassword(secret);
        this.state = State.SubmissionOpen;
    }
}
exports.GameState = GameState;
//# sourceMappingURL=GameState.js.map