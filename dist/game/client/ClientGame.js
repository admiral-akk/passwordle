"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientGame = void 0;
const InputManager_1 = require("./input/InputManager");
const PlayerBoard_1 = require("../model/PlayerBoard");
const Updates_1 = require("../network/updates/Updates");
const PlayerState_1 = require("../../public/PlayerState");
const LobbyManager_1 = require("../../lobby/state/LobbyManager");
class ClientGame extends PlayerState_1.PlayerState {
    constructor() {
        super();
        this.board = new PlayerBoard_1.PlayerBoard(true, (key) => this.Input(key));
        new InputManager_1.InputManager((char) => this.AddChar(char), () => this.Delete(), () => this.Submit());
    }
    Exit() {
        return new Promise(resolve => setTimeout(resolve, 2000)).then(() => this.board.Exit());
    }
    Enter() {
        this.socket.emit('GameClientReady');
    }
    Register(socket) {
        socket.on('OpponentAddedChar', () => this.OpponentAddedChar());
        socket.on('UpdatedAnswerKnowledge', (update) => this.UpdatedAnswerKnowledge(update));
        socket.on('SetSecret', (secret) => this.SetSecret(secret));
        socket.on('OpponentDeleted', () => this.OpponentDeleted());
        socket.on('OpponentLockedGuess', () => this.OpponentLockedGuess());
        socket.on('OpponentDisconnected', () => this.OpponentDisconnected());
    }
    Deregister(socket) {
        socket.removeAllListeners('OpponentAddedChar');
        socket.removeAllListeners('UpdatedAnswerKnowledge');
        socket.removeAllListeners('SetSecret');
        socket.removeAllListeners('OpponentDeleted');
        socket.removeAllListeners('OpponentLockedGuess');
        socket.removeAllListeners('OpponentDisconnected');
    }
    Input(key) {
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
        this.SwitchState(new LobbyManager_1.LobbyManager(PlayerBoard_1.GameOverState.OpponentDisconnected));
    }
    SetSecret(secret) {
        this.board.SetSecret(secret);
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
            this.SwitchState(new LobbyManager_1.LobbyManager(this.board.GameOver()));
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