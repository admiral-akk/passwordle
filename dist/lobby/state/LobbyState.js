"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyState = void 0;
class State {
    constructor() {
        this.socket = null;
    }
    SwitchState(nextState) {
        this.DeregisterSocket();
        this.Exit().then(() => {
            nextState.Initialize(this.socket, this.setState);
            this.setState(nextState);
        });
    }
    DeregisterSocket() {
        this.Deregister(this.socket);
    }
    Initialize(socket, setState) {
        this.socket = socket;
        this.setState = setState;
        this.Register(socket);
        this.Enter();
    }
}
class LobbyState extends State {
}
exports.LobbyState = LobbyState;
//# sourceMappingURL=LobbyState.js.map