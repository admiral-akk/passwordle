"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyServer = void 0;
class LobbyServer {
    constructor(socket) {
        this.players = socket;
    }
    PlayerJoins(player) {
        player.data.isReady = false;
        this.players.push(player);
    }
    AddPlayer(player) {
        this.players.push(player);
    }
    Ready() {
        return this.players.filter(p => !p.data.isReady).length === 0;
    }
}
exports.LobbyServer = LobbyServer;
//# sourceMappingURL=LobbyServer.js.map