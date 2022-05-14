"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyManager = void 0;
const LoadingState_1 = require("./loading/LoadingState");
class LobbyManager {
    constructor(socket) {
        this.socket = socket;
        this.Register(socket);
        socket.emit('ClientReady');
        this.state = new LoadingState_1.LoadingState();
        this.state.Initialize(this.socket, (nextState) => this.SetState(nextState));
    }
    Register(socket) {
        socket.on('GameReady', () => {
            this.GameReady();
        });
    }
    Deregister(socket) {
        socket.removeAllListeners('GameReady');
    }
    SetState(nextState) {
        this.state = nextState;
    }
    GameReady() {
        // this.SwitchState(new ClientGame());
    }
}
exports.LobbyManager = LobbyManager;
//# sourceMappingURL=LobbyManager.js.map