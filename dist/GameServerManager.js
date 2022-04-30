"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameServerManager = void 0;
class GameServerManager {
    constructor(handoffGame) {
        this.activeGames = [];
        this.handoffGame = handoffGame;
    }
    AddGame(game) {
        this.activeGames.push(game);
    }
    GameCompleted() { }
}
exports.GameServerManager = GameServerManager;
//# sourceMappingURL=GameServerManager.js.map