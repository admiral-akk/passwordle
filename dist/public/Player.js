"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = exports.ExitState = exports.PlayerStateEnum = void 0;
const ClientGame_1 = require("../game/client/ClientGame");
const LobbyManager_1 = require("../lobby/client/LobbyManager");
const ClientNetworking_1 = require("./ClientNetworking");
const StartState_1 = require("./StartState");
var PlayerStateEnum;
(function (PlayerStateEnum) {
    PlayerStateEnum[PlayerStateEnum["Start"] = 0] = "Start";
    PlayerStateEnum[PlayerStateEnum["Lobby"] = 1] = "Lobby";
    PlayerStateEnum[PlayerStateEnum["Game"] = 2] = "Game";
})(PlayerStateEnum = exports.PlayerStateEnum || (exports.PlayerStateEnum = {}));
class ExitState {
    constructor(prevState) {
        this.prevState = prevState;
    }
}
exports.ExitState = ExitState;
class Player {
    constructor() {
        this.state = new StartState_1.StartState();
        this.socket = (0, ClientNetworking_1.GetSocket)();
        const lobby = new LobbyManager_1.NewLobbyManager(this.socket);
        new ClientGame_1.ClientGame(this.socket, () => lobby.ShowMenu());
    }
}
exports.Player = Player;
//# sourceMappingURL=Player.js.map