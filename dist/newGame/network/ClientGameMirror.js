"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientGameMirror = void 0;
const ClientBoard_1 = require("../model/ClientBoard");
class ClientGameMirror {
    constructor(socket, addedChar) {
        this.socket = socket;
        this.addedChar = addedChar;
        this.board = new ClientBoard_1.ClientBoard();
        this.socket.on('AddedChar', (update) => this.AddedChar(update));
    }
    AddedChar(update) {
        this.board.AddChar(update.char);
        this.addedChar(update);
    }
    OpponentAddedChar(update) {
        this.board.OpponentAddedChar(update);
        this.socket.emit('OpponentAddedChar', update);
    }
}
exports.ClientGameMirror = ClientGameMirror;
//# sourceMappingURL=ClientGameMirror.js.map