"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientGame = void 0;
const InputManager_1 = require("../client/input/InputManager");
const GameView_1 = require("../client/view/GameView");
const PlayerBoard_1 = require("../model/PlayerBoard");
class ClientGame {
    constructor(socket) {
        this.socket = socket;
        this.board = new PlayerBoard_1.PlayerBoard(new GameView_1.GameView());
        socket.on('OpponentAddedChar', () => this.OpponentAddedChar());
        socket.on('UpdatedAnswerKnowledge', (update) => this.UpdatedAnswerKnowledge(update));
        socket.on('SetSecret', (secret) => this.SetSecret(secret));
        socket.on('OpponentDeleted', () => this.OpponentDeleted());
        socket.on('OpponentLockedGuess', () => this.OpponentLockedGuess());
        new InputManager_1.InputManager((char) => this.AddChar(char), () => this.Delete(), () => this.Submit());
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
        if (res) {
            const command = res;
            this.board.LockedGuess(command);
            this.socket.emit('LockedGuess', command);
        }
    }
}
exports.ClientGame = ClientGame;
//# sourceMappingURL=ClientGame.js.map