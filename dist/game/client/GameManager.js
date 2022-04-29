"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameManager = void 0;
const InputManager_1 = require("./input/InputManager");
const CharUpdate_1 = require("./view/CharUpdate");
const GameView_1 = require("./view/GameView");
var GameState;
(function (GameState) {
    GameState[GameState["Start"] = 0] = "Start";
    GameState[GameState["ShowHiddenWord"] = 1] = "ShowHiddenWord";
    GameState[GameState["SubmissionOpen"] = 2] = "SubmissionOpen";
    GameState[GameState["WaitingForOpponent"] = 3] = "WaitingForOpponent";
    GameState[GameState["OpponentGuessed"] = 4] = "OpponentGuessed";
    GameState[GameState["RevealHints"] = 5] = "RevealHints";
    GameState[GameState["Won"] = 6] = "Won";
    GameState[GameState["Lost"] = 7] = "Lost";
    GameState[GameState["EndGameMenu"] = 8] = "EndGameMenu";
})(GameState || (GameState = {}));
class GameManager {
    constructor(socket) {
        this.view = new GameView_1.GameView();
        this.socket = socket;
        this.state = GameState.Start;
        this.currentGuess = '';
        this.input = new InputManager_1.InputManager((char) => this.AddChar(char), () => this.Delete(), () => this.Submit());
        RegisterSecretWord(this.socket, (secret) => this.SetSecret(secret));
        RegisterSubmissionOpen(this.socket, () => this.SubmissionOpen());
    }
    InputActive() {
        return (this.state === GameState.SubmissionOpen ||
            this.state === GameState.OpponentGuessed);
    }
    AddChar(char) {
        if (!this.InputActive()) {
            return;
        }
        if (this.currentGuess.length >= 5) {
            return;
        }
        const update = new CharUpdate_1.CharUpdate(char, 0, this.currentGuess.length);
        this.view.Update(update);
        this.currentGuess += char;
        console.log(`CHAR: ${char}`);
    }
    Submit() {
        if (!this.InputActive()) {
            return;
        }
        console.log('SUBMIT');
    }
    Delete() {
        if (!this.InputActive()) {
            return;
        }
        if (this.currentGuess.length === 0) {
            return;
        }
        this.currentGuess = this.currentGuess.slice(0, -1);
        const update = new CharUpdate_1.CharUpdate('', 0, this.currentGuess.length);
        this.view.Update(update);
        console.log('DELETE');
    }
    SubmissionOpen() {
        this.SetState(GameState.SubmissionOpen);
    }
    SetSecret(secret) {
        this.view.SetSecret(secret);
        this.SetState(GameState.ShowHiddenWord);
    }
    SetState(newState) {
        this.state = newState;
        switch (newState) {
            default:
                break;
        }
    }
}
exports.GameManager = GameManager;
function RegisterSecretWord(socket, callback) {
    socket.on('SecretWord', (secret) => {
        callback(secret);
    });
}
function RegisterSubmissionOpen(socket, callback) {
    socket.on('SubmissionOpen', () => {
        callback();
    });
}
//# sourceMappingURL=GameManager.js.map