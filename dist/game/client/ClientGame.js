"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientGame = void 0;
const InputManager_1 = require("./input/InputManager");
const GameState_1 = require("../model/GameState");
const GameNetworkTypes_1 = require("../../network/GameNetworkTypes");
const Updates_1 = require("../network/Updates");
const GameValidator_1 = require("../../server/game/GameValidator");
const GameUpdater_1 = require("../../server/game/GameUpdater");
var State;
(function (State) {
    State[State["None"] = 0] = "None";
    State[State["SubmissionOpen"] = 1] = "SubmissionOpen";
    State[State["EnteringRandomGuess"] = 2] = "EnteringRandomGuess";
})(State || (State = {}));
class ClientGame extends GameState_1.GameState {
    constructor(socket, gameEnd) {
        super(document.getElementById('game-board'), (key) => this.Input(key), (guess, currentGuessLength) => this.SubmitRandomGuess(guess, currentGuessLength));
        this.socket = socket;
        this.gameEnd = gameEnd;
        this.clientState = State.None;
        new InputManager_1.InputManager((char) => this.Input(char), () => this.Input('DEL'), () => this.Input('ENT'));
        this.validator = new GameValidator_1.GameValidator(this, new GameValidator_1.GameActionEmitter(socket));
        this.updater = new GameUpdater_1.GameUpdater([this]);
        (0, GameNetworkTypes_1.RegisterGameClient)(socket, this.updater);
        socket.on('SetSecret', () => (this.clientState = State.SubmissionOpen));
        socket.on('OpponentDisconnected', () => this.OpponentDisconnected());
    }
    StartGame() {
        this.Reset();
        this.socket.emit('GameClientReady');
    }
    SubmitRandomGuess(guess, currentGuessLength) {
        this.clientState = State.EnteringRandomGuess;
        let animations = new Promise(resolve => {
            resolve();
        });
        for (let i = 0; i < currentGuessLength; i++) {
            animations = animations
                .then(() => {
                this.Input('DEL', true);
                return Promise.resolve();
            })
                .then(() => new Promise(resolve => setTimeout(resolve, 300)));
        }
        for (let i = 0; i < guess.length; i++) {
            animations = animations
                .then(() => {
                this.Input(guess[i], true);
                return Promise.resolve();
            })
                .then(() => new Promise(resolve => setTimeout(resolve, 300)));
        }
        animations.then(() => {
            this.Input('ENT', true);
            return Promise.resolve();
        });
    }
    Input(key, overrideState = false) {
        if (this.clientState !== State.SubmissionOpen && !overrideState) {
            return;
        }
        if (key.length === 1) {
            this.validator.AddChar(new Updates_1.AddedChar(key));
        }
        else if (key === 'ENT') {
            this.validator.LockGuess();
        }
        else {
            this.validator.Delete();
        }
    }
    OpponentDisconnected() {
        // this.SwitchState(new LobbyManager(this.socket, this.set));
    }
    EndGame(endGameSummary) {
        return new Promise(resolve => {
            this.gameEnd(endGameSummary);
            resolve();
        });
    }
    UpdatedAnswerKnowledge(update) {
        return Promise.resolve()
            .then(() => super.UpdatedAnswerKnowledge(update))
            .then(() => {
            const gameOver = this.IsGameOver();
            if (!gameOver) {
                this.clientState = State.SubmissionOpen;
                return Promise.resolve();
            }
            return this.EndGame(update.endGameState);
        });
    }
}
exports.ClientGame = ClientGame;
//# sourceMappingURL=ClientGame.js.map