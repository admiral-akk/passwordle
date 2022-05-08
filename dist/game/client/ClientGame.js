"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientGame = void 0;
const InputManager_1 = require("./input/InputManager");
const GameView_1 = require("./view/GameView");
const PlayerBoard_1 = require("../model/PlayerBoard");
const PlayerState_1 = require("../../public/PlayerState");
const LobbyManager_1 = require("../../lobby/client/LobbyManager");
class ClientGame extends PlayerState_1.PlayerState {
    constructor() {
        super();
        this.board = new PlayerBoard_1.PlayerBoard(new GameView_1.GameView());
        new InputManager_1.InputManager((char) => this.AddChar(char), () => this.Delete(), () => this.Submit());
    }
    Exit() { }
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
        const res = this.board.AddCharCommand(char);
        // success: tell the server/view about it
        if (res) {
            const command = res;
            this.board.AddedChar(command);
            this.socket.emit('AddedChar', command);
        }
    }
    Delete() {
        const res = this.board.DeleteCommand();
        // success: tell the server/view about it
        if (res) {
            this.board.Deleted();
            this.socket.emit('Deleted');
        }
    }
    Submit() {
        const res = this.board.SubmitCommand();
        // success: tell the server/view about it
        const command = res;
        if (command) {
            this.board.LockedGuess(command);
            this.socket.emit('LockedGuess', command);
        }
    }
}
exports.ClientGame = ClientGame;
//# sourceMappingURL=ClientGame.js.map