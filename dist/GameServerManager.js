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
        const game = new GameServer_1.GameServer(players);
        this.activeGames[players[0].id] = game;
    }
    GameCompleted(game) {
        this.gameComplete(game.players);
        delete this.activeGames[game.players[0].id];
    }
}
exports.GameServerManager = GameServerManager;
//# sourceMappingURL=GameServerManager.js.map