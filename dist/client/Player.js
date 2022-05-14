"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const ClientGame_1 = require("../game/client/ClientGame");
const LobbyManager_1 = require("../lobby/state/LobbyManager");
const ClientNetworking_1 = require("./ClientNetworking");
class Player {
    constructor() {
        this.socket = (0, ClientNetworking_1.GetSocket)();
        this.lobby = new LobbyManager_1.LobbyManager(this.socket);
        this.game = new ClientGame_1.ClientGame(this.socket);
        this.socket.on('GameReady', () => this.game.StartGame());
    }
}
exports.Player = Player;
//# sourceMappingURL=Player.js.map