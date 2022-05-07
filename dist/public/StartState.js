"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartState = void 0;
const Player_1 = require("./Player");
class StartState {
    Enter(prevState) { }
    Exit() {
        return new Player_1.ExitState(Player_1.PlayerStateEnum.Start);
    }
}
exports.StartState = StartState;
//# sourceMappingURL=StartState.js.map