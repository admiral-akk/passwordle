"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameServerManager = void 0;
const ServerGame_1 = require("./newGame/network/ServerGame");
class GameServerManager {
    constructor(gameComplete) {
        this.activeGames = {};
        this.gameComplete = gameComplete;
    }
    NewGame(players) {
        players.forEach((s, i) => (s.data.playerIndex = i));
        const gameId = players[0].id;
        const game = new ServerGame_1.ServerGame(players);
        this.activeGames[gameId] = game;
    }
    GameCompleted(gameId) {
        delete this.activeGames[gameId];
    }
}
exports.GameServerManager = GameServerManager;
//# sourceMappingURL=GameServerManager.js.map