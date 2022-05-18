"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddChar = void 0;
const GameCommand_1 = require("./GameCommand");
class AddChar extends GameCommand_1.GameCommand {
    constructor(model, key) {
        super(model);
        this.key = key;
    }
    execute() {
        this.gameModel.currentGuess += this.key;
        this.successful = true;
    }
    undo() {
        if (this.successful) {
            this.gameModel.currentGuess = this.gameModel.currentGuess.slice(0, -1);
        }
        this.successful = false;
    }
}
exports.AddChar = AddChar;
//# sourceMappingURL=AddChar.js.map