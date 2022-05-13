"use strict";
// Server: Takes Action, passes PlayerId, GameId, Action to central server.
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameServer = void 0;
const GameState_1 = require("../../game/model/GameState");
const Words_1 = require("../../game/Words");
const GameNetworkTypes_1 = require("../../network/GameNetworkTypes");
const GameUpdater_1 = require("./GameUpdater");
const GameValidator_1 = require("./GameValidator");
class GameServer {
    constructor(ExitGame) {
        this.ExitGame = ExitGame;
        this.gameValidators = {};
        this.gameUpdaters = {};
        this.games = {};
        this.AddedChar = (update, playerId) => {
            const game = this.games[playerId];
            const opponentId = game.GetOpponent(playerId);
            this.gameUpdaters[playerId].AddedChar(update);
            this.gameUpdaters[opponentId].OpponentAddedChar();
        };
        this.Deleted = (playerId) => {
            const game = this.games[playerId];
            const opponentId = game.GetOpponent(playerId);
            this.gameUpdaters[playerId].Deleted();
            this.gameUpdaters[opponentId].OpponentDeleted();
        };
        this.LockedGuess = (update, playerId) => {
            const game = this.games[playerId];
            const opponentId = game.GetOpponent(playerId);
            this.gameUpdaters[playerId].LockedGuess(update);
            this.gameUpdaters[opponentId].OpponentLockedGuess();
        };
        this.GameClientReady = (playerId) => {
            this.gameUpdaters[playerId].SetSecret((0, Words_1.GetRandomAnswer)());
        };
    }
    StartGame(playerSockets) {
        const players = playerSockets.map(socket => socket.data.playerId);
        const game = new Game(players);
        playerSockets.forEach(socket => {
            const player = socket.data.playerId;
            this.games[player] = game;
            this.gameValidators[player] = new GameValidator_1.GameValidator(player, game.gameState, this);
            (0, GameNetworkTypes_1.RegisterGameServer)(socket, this.gameValidators[player]);
            this.gameUpdaters[player] = new GameUpdater_1.GameUpdater(game.gameState, new GameNetworkTypes_1.GameUpdateEmitter(socket));
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
class Game {
    constructor(players) {
        this.players = players;
        this.gameState = new GameState_1.GameState();
    }
    GetOpponent(player) {
        if (this.players[0] === player) {
            return this.players[1];
        }
        else {
            return this.players[0];
        }
    }
}
//# sourceMappingURL=GameServer.js.map