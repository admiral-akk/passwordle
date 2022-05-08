"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpponentPasswordState = void 0;
const BoardState_1 = require("../model/BoardState");
class OpponentPasswordState extends BoardState_1.BoardState {
    constructor() {
        super(...arguments);
        this.view = new OpponentPasswordView();
    }
}
exports.OpponentPasswordState = OpponentPasswordState;
class OpponentPasswordView {
}
//# sourceMappingURL=OpponentPasswordState.js.map