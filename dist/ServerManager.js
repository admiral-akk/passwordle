"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameActions = exports.PlayerActions = exports.ServerManager = void 0;
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
        return this.activeGames[lobbyId].SubmitMove(move);
    }
}
exports.ServerManager = ServerManager;
var PlayerActions;
(function (PlayerActions) {
    PlayerActions[PlayerActions["JoinLobby"] = 0] = "JoinLobby";
    PlayerActions[PlayerActions["StartLobby"] = 1] = "StartLobby";
    PlayerActions[PlayerActions["EnterGuess"] = 2] = "EnterGuess";
    PlayerActions[PlayerActions["DeleteChar"] = 3] = "DeleteChar";
    PlayerActions[PlayerActions["AddChar"] = 4] = "AddChar";
    PlayerActions[PlayerActions["CopyLobbyLink"] = 5] = "CopyLobbyLink";
})(PlayerActions = exports.PlayerActions || (exports.PlayerActions = {}));
var GameActions;
(function (GameActions) {
    GameActions[GameActions["SendState"] = 0] = "SendState";
    GameActions[GameActions["SendGameId"] = 1] = "SendGameId";
    GameActions[GameActions["SendResults"] = 2] = "SendResults";
    GameActions[GameActions["RequestState"] = 3] = "RequestState";
})(GameActions = exports.GameActions || (exports.GameActions = {}));
//# sourceMappingURL=ServerManager.js.map