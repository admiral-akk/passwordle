"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientGameMirror = void 0;
const PlayerBoard_1 = require("../model/PlayerBoard");
class ClientGameMirror {
    constructor(socket) {
        this.socket = socket;
        this.secret = null;
        this.board = new PlayerBoard_1.PlayerBoard();
        this.otherPlayer = null;
        this.lockedGuessCallback = () => { };
        this.socket.removeAllListeners('AddedChar');
        this.socket.removeAllListeners('Deleted');
        this.socket.removeAllListeners('LockedGuess');
        this.socket.removeAllListeners('GameClientReady');
        this.socket.on('AddedChar', (update) => this.AddedChar(update));
        this.socket.on('Deleted', () => this.Deleted());
        this.socket.on('LockedGuess', (update) => this.LockedGuess(update));
        this.socket.on('GameClientReady', () => this.GameClientReady());
    }
    GameClientReady() {
        this.socket.emit('SetSecret', this.secret);
    }
    OpponentDisconnected() { }
    SetSecret(secret) {
        this.board.SetSecret(secret);
        this.secret = secret;
    }
    OpponentLockedGuess() {
        this.board.OpponentLockedGuess();
        this.socket.emit('OpponentLockedGuess');
    }
    LockedGuess(update) {
        var _a;
        this.board.LockedGuess();
        (_a = this.otherPlayer) === null || _a === void 0 ? void 0 : _a.OpponentLockedGuess();
        this.lockedGuessCallback(update);
    }
    RegisterOtherPlayer(otherPlayer) {
        this.otherPlayer = otherPlayer;
    }
    RegisterLockedGuess(callback) {
        this.lockedGuessCallback = callback;
    }
    Deleted() {
        var _a;
        this.board.Deleted();
        (_a = this.otherPlayer) === null || _a === void 0 ? void 0 : _a.OpponentDeleted();
    }
    AddedChar(update) {
        var _a;
        this.board.AddedChar(update);
        (_a = this.otherPlayer) === null || _a === void 0 ? void 0 : _a.OpponentAddedChar();
    }
    OpponentDeleted() {
        this.board.OpponentDeleted();
        this.socket.emit('OpponentDeleted');
    }
    OpponentAddedChar() {
        this.board.OpponentAddedChar();
        this.socket.emit('OpponentAddedChar');
    }
    UpdatedAnswerKnowledge(update) {
        this.board.UpdatedAnswerKnowledge(update);
        this.socket.emit('UpdatedAnswerKnowledge', update);
    }
}
exports.ClientGameMirror = ClientGameMirror;
//# sourceMappingURL=ClientGameMirror.js.map