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
    Opponent(playerId) {
        if (this.players[0] === playerId && this.players.length > 1) {
            return this.players[1];
        }
        return this.players[0];
    }
}
exports.Lobby = Lobby;
//# sourceMappingURL=Lobby.js.map