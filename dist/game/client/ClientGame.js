"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientGame = void 0;
const InputManager_1 = require("./input/InputManager");
const PlayerBoard_1 = require("../model/PlayerBoard");
const Updates_1 = require("../network/updates/Updates");
const PlayerState_1 = require("../../public/PlayerState");
const LobbyManager_1 = require("../../lobby/client/LobbyManager");
class ClientGame extends PlayerState_1.PlayerState {
    constructor() {
        super();
        this.board = new PlayerBoard_1.PlayerBoard(true);
        new InputManager_1.InputManager((char) => this.AddChar(char), () => this.Delete(), () => this.Submit());
    }
    Exit() {
        this.board.Exit();
    }
    Enter() { }
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
    OpponentDisconnected() {
        this.board.OpponentDisconnected();
        this.SwitchState(new LobbyManager_1.LobbyManager());
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
    UpdatedAnswerKnowledge(update) {
        this.board.UpdatedAnswerKnowledge(update);
        if (this.board.IsGameOver()) {
            this.SwitchState(new LobbyManager_1.LobbyManager());
        }
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