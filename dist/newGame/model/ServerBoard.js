"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerBoard = void 0;
const Updates_1 = require("../network/updates/Updates");
class ServerBoard {
    addedChar(player, update) {
        return new Updates_1.OpponentAddedChar();
    }
}
exports.ServerBoard = ServerBoard;
//# sourceMappingURL=ServerBoard.js.map