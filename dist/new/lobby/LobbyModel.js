"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyModel = exports.LobbyState = void 0;
const CommandHandler_1 = require("../CommandHandler");
var LobbyState;
(function (LobbyState) {
    LobbyState[LobbyState["None"] = 0] = "None";
    LobbyState[LobbyState["InLobby"] = 1] = "InLobby";
    LobbyState[LobbyState["InGame"] = 2] = "InGame";
})(LobbyState = exports.LobbyState || (exports.LobbyState = {}));
class LobbyModel extends CommandHandler_1.CommandHandler {
    constructor() {
        super(...arguments);
        this.state = LobbyState.None;
        this.playerCount = 0;
        this.rematchRequestCount = 0;
        this.requestedRematch = false;
    }
    Execute(command) {
        command.Execute(this);
    }
    Apply(update) {
        if (update.lobbyId) {
            this.lobbyId = update.lobbyId.after;
        }
        if (update.state) {
            this.state = update.state.after;
        }
        if (update.playerCount) {
            this.playerCount = update.playerCount.after;
        }
        if (update.rematchRequestCount) {
            this.rematchRequestCount = update.rematchRequestCount.after;
        }
        if (update.requestedRematch) {
            this.requestedRematch = update.requestedRematch.after;
        }
    }
    Undo(update) {
        if (update.lobbyId) {
            this.lobbyId = update.lobbyId.before;
        }
        if (update.state) {
            this.state = update.state.before;
        }
        if (update.playerCount) {
            this.playerCount = update.playerCount.before;
        }
        if (update.rematchRequestCount) {
            this.rematchRequestCount = update.rematchRequestCount.before;
        }
        if (update.requestedRematch) {
            this.requestedRematch = update.requestedRematch.before;
        }
    }
}
exports.LobbyModel = LobbyModel;
//# sourceMappingURL=LobbyModel.js.map