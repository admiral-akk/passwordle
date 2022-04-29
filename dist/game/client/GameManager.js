"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameManager = void 0;
const GameView_1 = require("./view/GameView");
var GameState;
(function (GameState) {
    GameState[GameState["Start"] = 0] = "Start";
    GameState[GameState["ShowHiddenWord"] = 1] = "ShowHiddenWord";
    GameState[GameState["Guess"] = 2] = "Guess";
    GameState[GameState["WaitingForOpponent"] = 3] = "WaitingForOpponent";
    GameState[GameState["OpponentGuessed"] = 4] = "OpponentGuessed";
    GameState[GameState["RevealHints"] = 5] = "RevealHints";
    GameState[GameState["Won"] = 6] = "Won";
    GameState[GameState["Lost"] = 7] = "Lost";
    GameState[GameState["EndGameMenu"] = 8] = "EndGameMenu";
})(GameState || (GameState = {}));
class GameManager {
    constructor(socket) {
        this.view = new GameView_1.GameView();
        this.socket = socket;
        this.state = GameState.Start;
        RegisterGetPublicLobbyId(this.socket, (secret) => this.SetSecret(secret));
    }
    SetSecret(secret) {
        this.view.SetSecret(secret);
        this.SetState(GameState.ShowHiddenWord);
    }
    SetState(newState) {
        this.state = newState;
        switch (newState) {
            default:
                break;
        }
    }
}
exports.GameManager = GameManager;
function RegisterGetPublicLobbyId(socket, callback) {
    socket.on('SecretWord', (secret) => {
        callback(secret);
    });
}
//# sourceMappingURL=GameManager.js.map