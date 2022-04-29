"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameServer = void 0;
var GameState;
(function (GameState) {
    GameState[GameState["Start"] = 0] = "Start";
})(GameState || (GameState = {}));
class GameServer {
    constructor(players) {
        this.players = players;
    }
}
exports.GameServer = GameServer;
//# sourceMappingURL=GameServer.js.map