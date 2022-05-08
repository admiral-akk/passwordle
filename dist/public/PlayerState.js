"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyState = exports.PlayerState = void 0;
class State {
    constructor() {
        this.socket = null;
        this.setState = null;
    }
    SwitchState(nextState) {
        this.Deregister(this.socket);
        this.Exit();
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
class PlayerState extends State {
}
exports.PlayerState = PlayerState;
class LobbyState extends State {
}
exports.LobbyState = LobbyState;
//# sourceMappingURL=PlayerState.js.map