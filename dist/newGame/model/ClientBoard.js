"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientBoard = void 0;
const Updates_1 = require("../network/updates/Updates");
class ClientBoard {
    AddChar(char) {
        return new Updates_1.AddedChar(char);
    }
    OpponentAddedChar(update) { }
}
exports.ClientBoard = ClientBoard;
//# sourceMappingURL=ClientBoard.js.map