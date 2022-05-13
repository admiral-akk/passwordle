"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketManager = void 0;
class SocketManager {
    constructor() {
        this.sockets = {};
    }
    AddSocket(socket) {
        this.sockets[socket.data.playerId] = socket;
    }
    GetSockets(players) {
        return players.map(player => this.sockets[player]);
    }
}
exports.SocketManager = SocketManager;
//# sourceMappingURL=SocketManager.js.map