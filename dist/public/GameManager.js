"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameActions = exports.PlayerActions = exports.GameManager = void 0;
const BoardManager_1 = require("./BoardManager");
const ClientManager_1 = require("./ClientManager");
class GameManager {
    constructor() {
        this.state = GameState.None;
        this.network = new ClientManager_1.ClientManager();
        this.board = new BoardManager_1.BoardManager();
    }
}
exports.GameManager = GameManager;
var GameState;
(function (GameState) {
    GameState[GameState["None"] = 0] = "None";
    GameState[GameState["InLobby"] = 1] = "InLobby";
    GameState[GameState["WaitingForMove"] = 2] = "WaitingForMove";
    GameState[GameState["PlayerToMove"] = 3] = "PlayerToMove";
})(GameState || (GameState = {}));
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
//# sourceMappingURL=GameManager.js.map