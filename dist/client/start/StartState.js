"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartState = void 0;
const LobbyManager_1 = require("../../lobby/state/LobbyManager");
const PlayerState_1 = require("../PlayerState");
const StartNetworkTypes_1 = require("../../network/StartNetworkTypes");
class StartState extends PlayerState_1.PlayerState {
    Enter() { }
    Exit() {
        return Promise.resolve();
    }
    Register(socket) {
        (0, StartNetworkTypes_1.RegisterStartClient)(socket, this);
    }
    Deregister(socket) {
        (0, StartNetworkTypes_1.DeregisterStartClient)(socket);
    }
    constructor(socket, setState) {
        super();
        this.Initialize(socket, setState);
        socket.emit('ClientReady');
    }
    ServerReady() {
        this.SwitchState(new LobbyManager_1.LobbyManager());
    }
}
exports.StartState = StartState;
//# sourceMappingURL=StartState.js.map