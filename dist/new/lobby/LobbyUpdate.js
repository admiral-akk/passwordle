"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delta = exports.LobbyUpdate = void 0;
class LobbyUpdate {
    SetState(model, newState) {
        this.state = new Delta(model.state, newState);
    }
    SetLobbyId(model, newState) {
        this.lobbyId = new Delta(model.lobbyId, newState);
    }
    SetPlayerCount(model, newState) {
        this.playerCount = new Delta(model.playerCount, newState);
    }
    SetRematchCount(model, newState) {
        this.rematchRequestCount = new Delta(model.rematchRequestCount, newState);
    }
    SetRequestedRematch(model, newState) {
        this.requestedRematch = new Delta(model.requestedRematch, newState);
    }
}
exports.LobbyUpdate = LobbyUpdate;
class Delta {
    constructor(before, after) {
        this.before = before;
        this.after = after;
    }
}
exports.Delta = Delta;
//# sourceMappingURL=LobbyUpdate.js.map