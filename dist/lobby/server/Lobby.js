"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lobby = void 0;
class Lobby {
    constructor(players, lobbyId) {
        this.players = players;
        this.lobbyId = lobbyId;
        this.rematchRequested = [];
    }
    RequestRematch(playerId) {
        if (this.rematchRequested.indexOf(playerId) === -1) {
            this.rematchRequested.push(playerId);
        }
    }
}
exports.Lobby = Lobby;
//# sourceMappingURL=Lobby.js.map