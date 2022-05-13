"use strict";
// Server: Takes Action, passes PlayerId, GameId, Action to central server.
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameServer = void 0;
const GameNetworkTypes_1 = require("../../network/GameNetworkTypes");
const Game_1 = require("./Game");
const GameUpdater_1 = require("./GameUpdater");
const GameValidator_1 = require("./GameValidator");
class GameServer {
    constructor(ExitGame) {
        this.ExitGame = ExitGame;
        this.gameValidators = {};
        this.gameUpdaters = {};
        this.games = {};
    }
    StartGame(playerSockets) {
        const players = playerSockets.map(socket => socket.data.playerId);
        const game = new Game_1.Game(players);
        playerSockets.forEach(socket => {
            const player = socket.data.playerId;
            this.games[player] = game;
            this.gameValidators[player] = new GameValidator_1.GameValidator(player, game.gameStates[player], game);
            (0, GameNetworkTypes_1.DeregisterGameServer)(socket);
            (0, GameNetworkTypes_1.RegisterGameServer)(socket, this.gameValidators[player]);
            this.gameUpdaters[player] = new GameUpdater_1.GameUpdater(game.gameStates[player], new GameNetworkTypes_1.GameUpdateEmitter(socket));
            game.RegisterUpdater(player, this.gameUpdaters[player]);
        });
    }
    EndGame(players) {
        players.forEach(player => {
            delete this.games[player];
            delete this.gameValidators[player];
            delete this.gameUpdaters[player];
        });
        this.ExitGame(players);
    }
}
exports.GameServer = GameServer;
//# sourceMappingURL=GameServer.js.map