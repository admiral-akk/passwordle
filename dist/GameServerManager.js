"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameServerManager = void 0;
const GameServer_1 = require("./game/GameServer");
class GameServerManager {
    constructor(gameComplete) {
        this.activeGames = {};
        this.gameComplete = gameComplete;
    }
    NewGame(players) {
        players.forEach((s, i) => (s.data.playerIndex = i));
        const gameId = players[0].id;
        const game = new GameServer_1.GameServer(players, () => this.GameCompleted(gameId));
        this.activeGames[gameId] = game;
    }
    GameCompleted(gameId) {
        this.gameComplete(this.activeGames[gameId].players);
        delete this.activeGames[gameId];
    }
}
exports.GameServerManager = GameServerManager;
//# sourceMappingURL=GameServerManager.js.map