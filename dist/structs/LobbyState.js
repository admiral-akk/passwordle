"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyState = void 0;
class LobbyState {
    constructor(lobbyId) {
        this.lobbyId = lobbyId;
        this.players = [];
    }
    AddPlayer(playerId) {
        this.players.push(playerId);
    }
}
exports.LobbyState = LobbyState;
//# sourceMappingURL=LobbyState.js.map