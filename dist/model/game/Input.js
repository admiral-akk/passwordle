"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const GameCommand_1 = require("./GameCommand");
class Input extends GameCommand_1.GameCommand {
    constructor(model, key) {
        super(model);
        this.key = key;
    }
    execute() {
        if (this.key === 'ENT') {
            this.gameModel.Locked();
        }
        else if (this.key === 'DEL') {
            this.gameModel.Deleted();
        }
        else {
            this.gameModel.Added(this.key);
        }
    }
    undo() {
        if (this.key === 'ENT') {
            this.gameModel.Locked();
        }
        else if (this.key === 'DEL') {
            this.gameModel.Deleted();
        }
        else {
            this.gameModel.Added(this.key);
        }
    }
}
exports.Input = Input;
//# sourceMappingURL=Input.js.map