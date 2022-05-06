"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameServerManager = void 0;
const ServerGame_1 = require("./game/network/ServerGame");
class GameServerManager {
    constructor(ExitGame) {
        this.ExitGame = ExitGame;
        this.activeGames = {};
    }
    EnterGame(players) {
        const playerIds = players.map(player => player.data.playerId);
        const gameId = playerIds[0];
        const game = new ServerGame_1.ServerGame(players, () => this.GameCompleted(gameId, playerIds));
        this.activeGames[gameId] = game;
    }
    GameCompleted(gameId, players) {
        delete this.activeGames[gameId];
        this.ExitGame(players);
    }
}
exports.GameServerManager = GameServerManager;
//# sourceMappingURL=GameServerManager.js.map