"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = exports.PlayerState = void 0;
const ClientGame_1 = require("../game/client/ClientGame");
const LobbyManager_1 = require("../lobby/client/LobbyManager");
const ClientNetworking_1 = require("./ClientNetworking");
class PlayerState {
    constructor(socket, SetState) {
        this.socket = socket;
        this.SetState = SetState;
        console.log('registering socket');
        this.Register(socket);
        console.log('registering socket');
    }
    Exit(nextState) {
        this.SetState(nextState);
    }
}
exports.PlayerState = PlayerState;
class Player {
    constructor() {
        this.socket = (0, ClientNetworking_1.GetSocket)();
        this.state = null;
        const lobby = new LobbyManager_1.NewLobbyManager(this.socket, (nextState) => this.SetState(nextState));
        new ClientGame_1.ClientGame(this.socket, (nextState) => this.SetState(nextState), () => lobby.ShowMenu());
    }
    SetState(nextState) {
        this.state = nextState;
    }
}
exports.Player = Player;
//# sourceMappingURL=Player.js.map