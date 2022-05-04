"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientGameMirror = void 0;
const PlayerBoard_1 = require("../model/PlayerBoard");
class ClientGameMirror {
    constructor(socket, addedChar) {
        this.socket = socket;
        this.addedChar = addedChar;
        this.board = new PlayerBoard_1.PlayerBoard();
        this.socket.on('AddedChar', (update) => this.AddedChar(update));
    }
    AddedChar(update) {
        this.board.AddChar(update.char);
        this.addedChar(update);
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