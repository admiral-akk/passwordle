"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerState = void 0;
class PlayerState {
    constructor(socket, SetState) {
        this.socket = socket;
        this.SetState = SetState;
        this.Register(socket);
    }
    Exit(nextState) {
        this.SetState(nextState);
    }
}
exports.PlayerState = PlayerState;
//# sourceMappingURL=PlayerState.js.map