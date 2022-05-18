"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delete = void 0;
const GameCommand_1 = require("./GameCommand");
class Delete extends GameCommand_1.GameCommand {
    execute() {
        this.deletedChar = this.gameModel.currentGuess[-1];
        this.gameModel.currentGuess = this.gameModel.currentGuess.slice(0, -1);
    }
    undo() {
        if (this.deletedChar) {
            this.gameModel.currentGuess += this.deletedChar;
        }
        this.deletedChar = undefined;
    }
}
exports.Delete = Delete;
//# sourceMappingURL=Delete.js.map