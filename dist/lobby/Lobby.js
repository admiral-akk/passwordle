"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lobby = void 0;
class Lobby {
    constructor(socket) {
        this.id = socket.id;
        this.players = [socket];
    }
    AddPlayer(player) {
        this.players.push(player);
    }
}
exports.Lobby = Lobby;
//# sourceMappingURL=Lobby.js.map