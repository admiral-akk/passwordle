"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchState = void 0;
const PlayerState_1 = require("../../../public/PlayerState");
const Modal_1 = require("../Modal");
class MatchState extends PlayerState_1.LobbyState {
    constructor(lobbyId) {
        super();
        this.lobbyId = lobbyId;
        this.modal = new MatchModal();
    }
    Enter() { }
    Exit() {
        this.modal.Exit();
    }
    Register(socket) { }
    Deregister(socket) { }
}
exports.MatchState = MatchState;
class MatchModal extends Modal_1.Modal {
    constructor() {
        super();
        this.AddDiv('match', 'Match Found! Entering game!');
    }
}
//# sourceMappingURL=MatchState.js.map