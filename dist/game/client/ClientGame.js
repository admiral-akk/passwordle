"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientGame = void 0;
const InputManager_1 = require("./input/InputManager");
const GameState_1 = require("../model/GameState");
const GameNetworkTypes_1 = require("../../network/GameNetworkTypes");
const Updates_1 = require("../network/Updates");
var State;
(function (State) {
    State[State["None"] = 0] = "None";
    State[State["SubmissionOpen"] = 1] = "SubmissionOpen";
    State[State["EnteringRandomGuess"] = 2] = "EnteringRandomGuess";
})(State || (State = {}));
class ClientGame {
    constructor(socket) {
        this.socket = socket;
        this.state = State.None;
        this.board = new GameState_1.GameState(document.getElementById('game-board'), (key) => this.Input(key), (guess, currentGuessLength) => this.SubmitRandomGuess(guess, currentGuessLength));
        new InputManager_1.InputManager((char) => this.Input(char), () => this.Input('DEL'), () => this.Input('ENT'));
        (0, GameNetworkTypes_1.RegisterGameClient)(socket, this);
    }
    Register(socket) {
        (0, GameNetworkTypes_1.RegisterGameClient)(socket, this);
    }
    Reset() {
        this.board.Reset();
    }
    StartGame() {
        this.Reset();
        this.socket.emit('GameClientReady');
    }
    AddedChar(update) { }
    Deleted() { }
    LockedGuess(update) { }
    SubmitRandomGuess(guess, currentGuessLength) {
        this.state = State.EnteringRandomGuess;
        let animations = new Promise(resolve => {
            resolve();
        });
        for (let i = 0; i < currentGuessLength; i++) {
            animations = animations
                .then(() => {
                this.Delete();
                return Promise.resolve();
            })
                .then(() => new Promise(resolve => setTimeout(resolve, 300)));
        }
        for (let i = 0; i < guess.length; i++) {
            animations = animations
                .then(() => {
                this.AddChar(guess[i]);
                return Promise.resolve();
            })
                .then(() => new Promise(resolve => setTimeout(resolve, 300)));
        }
        animations.then(() => {
            this.Submit();
            this.state = State.SubmissionOpen;
            return Promise.resolve();
        });
    }
    Input(key) {
        if (this.state !== State.SubmissionOpen) {
            return;
        }
        if (key.length === 1) {
            this.AddChar(key);
        }
        else if (key === 'ENT') {
            this.Submit();
        }
        else {
            this.Delete();
        }
    }
    OpponentDisconnected() {
        this.board.OpponentDisconnected();
        // this.SwitchState(new LobbyManager(this.socket, this.set));
    }
    SetSecret(secret) {
        this.board.SetSecret(secret);
        this.state = State.SubmissionOpen;
    }
    OpponentLockedGuess() {
        this.board.OpponentLockedGuess();
    }
    OpponentDeleted() {
        this.board.OpponentDeleted();
    }
    OpponentAddedChar() {
        this.board.OpponentAddedChar();
    }
    EndGame() {
        return new Promise(resolve => {
            //   this.SwitchState(new LobbyManager(this.board.GameOver()));
            resolve();
        });
    }
    UpdatedAnswerKnowledge(update) {
        const animationPromise = this.board.UpdatedAnswerKnowledge(update);
        Promise.resolve()
            .then(() => animationPromise)
            .then(() => {
            const gameOver = this.board.IsGameOver();
            if (!gameOver) {
                this.state = State.SubmissionOpen;
                return Promise.resolve();
            }
            return this.EndGame();
        });
    }
    AddChar(char) {
        const command = new Updates_1.AddedChar(char);
        const res = this.board.AddedChar(command);
        // success: tell the server/view about it
        if (res) {
            this.socket.emit('AddedChar', command);
        }
    }
    Delete() {
        const res = this.board.Deleted();
        // success: tell the server/view about it
        if (res) {
            this.socket.emit('Deleted');
        }
    }
    Submit() {
        const res = this.board.LockedGuess();
        // success: tell the server/view about it
        if (res) {
            this.socket.emit('LockedGuess', new Updates_1.LockedGuess(res));
        }
    }
}
exports.ClientGame = ClientGame;
//# sourceMappingURL=ClientGame.js.map