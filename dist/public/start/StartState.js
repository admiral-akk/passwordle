"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartState = void 0;
const LobbyManager_1 = require("../../lobby/client/LobbyManager");
const PlayerState_1 = require("../PlayerState");
class StartState extends PlayerState_1.PlayerState {
    Register(socket) { }
    Deregister(socket) { }
    constructor(socket, setState) {
        super();
        this.Initialize(socket, setState);
        this.Exit(new LobbyManager_1.NewLobbyManager());
    }
}
exports.StartState = StartState;
//# sourceMappingURL=StartState.js.map