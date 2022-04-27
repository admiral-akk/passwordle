"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerManager = void 0;
const GameStateManager_1 = require("./GameStateManager");
const MatchmakingManager_1 = require("./MatchmakingManager");
class ServerManager {
    constructor() {
        this.matchmaking = new MatchmakingManager_1.MatchmakingManager();
        this.activeGames = {};
    }
    StartLobby() {
        return this.matchmaking.StartLobby();
    }
    JoinLobby(lobbyId) {
        const [clientId, playerIds] = this.matchmaking.JoinLobby(lobbyId);
        const game = new GameStateManager_1.GameStateManager(playerIds);
        this.activeGames[lobbyId] = game;
        return clientId;
    }
    GetState(lobbyId, player) {
        return this.activeGames[lobbyId].GetState(player);
    }
    SubmitMove(lobbyId, move) {
        this.activeGames[lobbyId].SubmitMove(move);
    }
}
exports.ServerManager = ServerManager;
//# sourceMappingURL=ServerManager.js.map