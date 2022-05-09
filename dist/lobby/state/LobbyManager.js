"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyManager = void 0;
const PlayerState_1 = require("../../public/PlayerState");
const ClientGame_1 = require("../../game/client/ClientGame");
const LoadingState_1 = require("./loading/LoadingState");
const RematchState_1 = require("./rematch/RematchState");
class LobbyManager extends PlayerState_1.PlayerState {
    constructor(isRematch) {
        super();
        this.isRematch = isRematch;
        this.state = null;
    }
    Exit() {
        var _a;
        (_a = this.state) === null || _a === void 0 ? void 0 : _a.Exit();
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
    Enter() {
        if (this.isRematch) {
            this.state = new RematchState_1.RematchState();
        }
        else {
            this.state = new LoadingState_1.LoadingState();
        }
        this.state.Initialize(this.socket, (nextState) => this.SetState(nextState));
    }
    GameReady() {
        this.SwitchState(new ClientGame_1.ClientGame());
    }
}
exports.LobbyManager = LobbyManager;
//# sourceMappingURL=LobbyManager.js.map