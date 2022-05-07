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
        const game = new ServerGame_1.ServerGame(players, (ending) => this.GameCompleted(gameId, playerIds, ending));
        this.activeGames[gameId] = game;
    }
    GameCompleted(gameId, players, ending) {
        delete this.activeGames[gameId];
        this.ExitGame(players, ending);
    }
}
exports.GameServerManager = GameServerManager;
//# sourceMappingURL=GameServerManager.js.map