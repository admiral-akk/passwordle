"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyManager = void 0;
const LoadingState_1 = require("./loading/LoadingState");
const RematchState_1 = require("./rematch/RematchState");
class LobbyManager {
    constructor(socket) {
        this.socket = socket;
        this.Register(socket);
        this.EnterState(new LoadingState_1.LoadingState());
    }
    Register(socket) {
        socket.on('GameReady', () => {
            this.GameReady();
        });
    }
    EnterState(state) {
        this.state = state;
        this.state.Initialize(this.socket, (nextState) => (this.state = nextState));
    }
    GameEnded(summary) {
        this.EnterState(new RematchState_1.RematchState(summary));
    }
    GameReady() {
        var _a;
        (_a = this.state) === null || _a === void 0 ? void 0 : _a.Exit();
        this.state = undefined;
        // this.SwitchState(new ClientGame());
    }
}
exports.LobbyManager = LobbyManager;
//# sourceMappingURL=LobbyManager.js.map