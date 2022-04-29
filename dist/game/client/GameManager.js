"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameManager = void 0;
const InputManager_1 = require("./input/InputManager");
const CharUpdate_1 = require("./view/CharUpdate");
const GameView_1 = require("./view/GameView");
const HintUpdate_1 = require("./view/HintUpdate");
var GameState;
(function (GameState) {
    GameState[GameState["Start"] = 0] = "Start";
    GameState[GameState["ShowHiddenWord"] = 1] = "ShowHiddenWord";
    GameState[GameState["SubmissionOpen"] = 2] = "SubmissionOpen";
    GameState[GameState["SentGuess"] = 3] = "SentGuess";
    GameState[GameState["WaitingForOpponent"] = 4] = "WaitingForOpponent";
    GameState[GameState["OpponentGuessed"] = 5] = "OpponentGuessed";
    GameState[GameState["RevealHints"] = 6] = "RevealHints";
    GameState[GameState["Won"] = 7] = "Won";
    GameState[GameState["Lost"] = 8] = "Lost";
    GameState[GameState["EndGameMenu"] = 9] = "EndGameMenu";
})(GameState || (GameState = {}));
class GameManager {
    constructor(socket) {
        this.view = new GameView_1.GameView();
        this.socket = socket;
        this.state = GameState.Start;
        this.currentGuess = '';
        this.currentIndex = 0;
        this.input = new InputManager_1.InputManager((char) => this.AddChar(char), () => this.Delete(), () => this.Submit());
        RegisterSecretWord(this.socket, (secret) => this.SetSecret(secret));
        RegisterSubmissionOpen(this.socket, () => this.SubmissionOpen());
        RegisterHints(this.socket, (hint) => this.Hints(hint));
        RegisterLost(this.socket, () => this.Lost());
        RegisterWon(this.socket, () => this.Won());
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
        const update = new CharUpdate_1.CharUpdate(char, this.currentIndex, this.currentGuess.length);
        this.view.CharUpdate(update);
        this.currentGuess += char;
        console.log(`CHAR: ${char}`);
    }
    Submit() {
        if (!this.InputActive()) {
            return;
        }
        if (this.currentGuess.length !== 5) {
            return;
        }
        SubmitGuess(this.socket, this.currentGuess);
        this.currentGuess = '';
        this.currentIndex++;
        this.SetState(GameState.SentGuess);
    }
    Delete() {
        if (!this.InputActive()) {
            return;
        }
        if (this.currentGuess.length === 0) {
            return;
        }
        this.currentGuess = this.currentGuess.slice(0, -1);
        const update = new CharUpdate_1.CharUpdate('', this.currentIndex, this.currentGuess.length);
        this.view.CharUpdate(update);
        console.log('DELETE');
    }
    Lost() {
        this.SetState(GameState.Lost);
    }
    Won() {
        this.SetState(GameState.Won);
    }
    SubmissionOpen() {
        this.SetState(GameState.SubmissionOpen);
    }
    SetSecret(secret) {
        this.view.SetSecret(secret);
        this.SetState(GameState.ShowHiddenWord);
    }
    Hints(hint) {
        const update = new HintUpdate_1.HintUpdate(hint.playerGuess, hint.opponentGuess, this.currentIndex - 1);
        this.view.HintUpdate(update);
        this.SetState(GameState.RevealHints);
    }
    SetState(newState) {
        this.state = newState;
        switch (newState) {
            case GameState.RevealHints:
                this.SetState(GameState.SubmissionOpen);
                break;
            case GameState.Lost:
                this.view.GameOver(false);
                break;
            case GameState.Won:
                this.view.GameOver(true);
                break;
            default:
                break;
        }
    }
}
exports.GameManager = GameManager;
function SubmitGuess(socket, guess) {
    socket.emit('SubmitGuess', guess);
}
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
function RegisterHints(socket, callback) {
    socket.on('Hints', hint => {
        callback(hint);
    });
}
function RegisterLost(socket, callback) {
    socket.on('Lost', () => {
        callback();
    });
}
function RegisterWon(socket, callback) {
    socket.on('Won', () => {
        callback();
    });
}
//# sourceMappingURL=GameManager.js.map