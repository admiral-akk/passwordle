"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientGameMirror = void 0;
const PlayerBoard_1 = require("../model/PlayerBoard");
class ClientGameMirror {
    constructor(socket) {
        this.socket = socket;
        this.board = new PlayerBoard_1.PlayerBoard();
        this.otherPlayer = null;
        this.socket.on('AddedChar', (update) => this.AddedChar(update));
    }
    OpponentSubmitted() { }
    Submitted(update) {
        this.board.Submitted(update);
        this.socket.emit('OpponentSubmitted');
    }
    RegisterOtherPlayer(otherPlayer) {
        this.otherPlayer = otherPlayer;
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