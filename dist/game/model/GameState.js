"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameState = void 0;
const Word_1 = require("../../structs/Word");
const Updates_1 = require("../network/Updates");
const YourBoardState_1 = require("./YourBoardState");
const YourPasswordState_1 = require("./YourPasswordState");
const OpponentBoardState_1 = require("./OpponentBoardState");
const OpponentPasswordState_1 = require("./OpponentPasswordState");
const KeyboardState_1 = require("./KeyboardState");
const TimerState_1 = require("./TimerState");
const Words_1 = require("../Words");
const GameView_1 = require("./view/GameView");
const TargetProgress_1 = require("../../structs/TargetProgress");
const WordleLogic_1 = require("../logic/WordleLogic");
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
    Reset() {
        this.yourBoard.Reset();
        this.yourPassword.Reset();
        this.opponentBoard.Reset();
        this.opponentPassword.Reset();
        this.keyboard.Reset();
        this.timer.Reset();
        this.endGame = undefined;
        this.state = State.None;
    }
    GuessSubmitted() {
        return this.state === State.GuessSubmitted;
    }
    GetCurrentGuess() {
        return (0, Word_1.ToWord)(this.yourBoard.currentGuess);
    }
    GetPassword() {
        return this.yourPassword.password;
    }
    GetProgress() {
        return this.yourPassword.GetProgress();
    }
    RandomGuess(guess) {
        for (let i = 0; i < guess.length; i++) {
            this.Deleted();
        }
        for (let i = 0; i < guess.length; i++) {
            this.AddChar(new Updates_1.AddedChar(guess[i]));
        }
        this.LockedGuess();
    }
    AddedChar(update) {
        return this.yourBoard.AddChar(update.char);
    }
    Deleted() {
        return this.yourBoard.Delete();
    }
    LockedGuess() {
        this.state = State.GuessSubmitted;
        this.yourBoard.LockedGuess();
    }
    CanAddChar(update) {
        if (update.char.length !== 1) {
            return false;
        }
        if (!/^[a-zA-Z]+$/.test(update.char)) {
            return false;
        }
        if (this.state !== State.SubmissionOpen) {
            return false;
        }
        return this.yourBoard.CanAddChar();
    }
    CanDelete() {
        if (this.state !== State.SubmissionOpen) {
            return false;
        }
        return this.yourBoard.CanDelete();
    }
    CanLockGuess() {
        if (this.state !== State.SubmissionOpen) {
            return false;
        }
        return this.yourBoard.CanSubmit();
    }
    IsReadyForNewGame() {
        return this.state === State.None;
    }
    GenerateKnowledgeUpdate(opponentGuess, opponentPassword) {
        const yourGuess = this.GetCurrentGuess();
        const yourPassword = this.yourPassword.GetPassword();
        const yourKnowledge = (0, WordleLogic_1.GetKnowledge)(yourGuess, opponentPassword);
        const opponentKnowledge = (0, WordleLogic_1.GetKnowledge)(opponentGuess, opponentPassword);
        const yourProgress = this.yourPassword.GetProgress();
        (0, TargetProgress_1.UpdateProgress)(yourProgress, (0, WordleLogic_1.GetKnowledge)(yourGuess, yourPassword));
        (0, TargetProgress_1.UpdateProgress)(yourProgress, (0, WordleLogic_1.GetKnowledge)(opponentGuess, yourPassword));
        const opponentProgress = this.opponentPassword.GetProgress();
        (0, TargetProgress_1.UpdateProgress)(opponentProgress, (0, WordleLogic_1.GetKnowledge)(yourGuess, opponentPassword));
        (0, TargetProgress_1.UpdateProgress)(opponentProgress, (0, WordleLogic_1.GetKnowledge)(opponentGuess, opponentPassword));
        return new Updates_1.UpdatedAnswerKnowledge(yourKnowledge, opponentKnowledge, yourProgress, opponentProgress, yourPassword, opponentPassword);
    }
    GameClientReady() { }
    OpponentDisconnected() { }
    TimerExhausted() {
        this.submitRandomGuess((0, Words_1.GetRandomGuess)(), this.yourBoard.CurrentGuessLength());
    }
    AddChar(update) {
        if (this.state !== State.SubmissionOpen) {
            return false;
        }
        return this.yourBoard.AddChar(update.char);
    }
    Delete() {
        if (this.state !== State.SubmissionOpen) {
            return false;
        }
        return this.yourBoard.Delete();
    }
    LockGuess() {
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
        return this.endGame !== undefined;
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
        // Sequence them
        const sequence = {};
        animations.forEach(animation => {
            const index = animation.letterIndex;
            if (!(index in sequence)) {
                sequence[index] = [];
            }
            sequence[index].push(animation.animationStart);
        });
        this.keyboard.Update([update.playerKnowledge, update.opponentKnowledge]);
        // String them into a promise
        let promise = new Promise(resolve => {
            resolve();
        });
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