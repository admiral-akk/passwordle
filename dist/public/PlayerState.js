"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerState = void 0;
class PlayerState {
    constructor() {
        this.socket = null;
        this.setState = null;
    }
    Exit(nextState) {
        this.Deregister(this.socket);
        nextState.Initialize(this.socket, this.setState);
        this.setState(nextState);
    }
    Initialize(socket, setState) {
        this.socket = socket;
        this.setState = setState;
        this.Register(socket);
        this.Enter();
    }
}
exports.PlayerState = PlayerState;
//# sourceMappingURL=PlayerState.js.map