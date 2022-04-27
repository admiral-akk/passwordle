"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameManager = void 0;
const BoardManager_1 = require("./BoardManager");
const InputManager_1 = require("./InputManager");
const NetworkInterface_1 = require("./NetworkInterface");
class GameManager {
    constructor() {
        this.state = GameState.WaitingForGame;
        this.network = new NetworkInterface_1.NetworkInterface();
        this.playerBoard = new BoardManager_1.PlayerBoardManager();
        this.opponentBoard = new BoardManager_1.OpponentBoardManager();
        this.input = new InputManager_1.InputManager();
        this.network.Connect();
    }
}
exports.GameManager = GameManager;
var GameState;
(function (GameState) {
    GameState[GameState["None"] = 0] = "None";
    GameState[GameState["WaitingForGame"] = 1] = "WaitingForGame";
    GameState[GameState["WaitingForMove"] = 2] = "WaitingForMove";
    GameState[GameState["PlayerToMove"] = 3] = "PlayerToMove";
})(GameState || (GameState = {}));
//# sourceMappingURL=GameManager.js.map