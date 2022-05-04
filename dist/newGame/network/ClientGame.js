"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientGame = void 0;
const ClientBoard_1 = require("../model/ClientBoard");
const Updates_1 = require("./updates/Updates");
class ClientGame {
    constructor(socket) {
        this.socket = socket;
        this.board = new ClientBoard_1.ClientBoard();
        socket.on('OpponentAddedChar', (update) => this.OpponentAddedChar(update));
    }
    AddChar(char) {
        const res = this.board.AddChar(char);
        if (typeof res === Updates_1.AddedChar.name) {
            this.socket.emit('AddedChar', res);
        }
        return res;
    }
    OpponentAddedChar(update) {
        this.board.OpponentAddedChar(update);
    }
}
exports.ClientGame = ClientGame;
//# sourceMappingURL=ClientGame.js.map