"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartState = void 0;
const LobbyManager_1 = require("../../lobby/state/LobbyManager");
const PlayerState_1 = require("../PlayerState");
class StartState extends PlayerState_1.PlayerState {
    Enter() { }
    Exit() {
        return Promise.resolve();
    }
    Register(socket) {
        socket.on('ServerReady', () => this.ServerReady());
    }
    Deregister(socket) {
        socket.removeAllListeners('ServerReady');
    }
    constructor(socket, setState) {
        super();
        this.Initialize(socket, setState);
        socket.emit('ClientReady');
    }
    ServerReady() {
        this.SwitchState(new LobbyManager_1.LobbyManager(false));
    }
}
exports.StartState = StartState;
//# sourceMappingURL=StartState.js.map