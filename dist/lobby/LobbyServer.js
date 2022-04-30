"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyServer = void 0;
class LobbyServer {
    constructor(socket) {
        this.id = socket.id;
        this.players = [socket];
        this.ready = [false];
    }
    PlayerJoins(player) {
        player.data.isReady = false;
        this.players.push(player);
    }
    AddPlayer(player) {
        this.players.push(player);
    }
}
exports.LobbyServer = LobbyServer;
//# sourceMappingURL=LobbyServer.js.map