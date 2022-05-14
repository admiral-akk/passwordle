"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InGameState = void 0;
const PlayerState_1 = require("../../../client/PlayerState");
const Modal_1 = require("../Modal");
class InGameState extends PlayerState_1.LobbyState {
    constructor() {
        super();
        this.modal = new InGameModal();
    }
    Exit() {
        return this.modal.Exit();
    }
    Enter() { }
    Register(socket) { }
    Deregister(socket) { }
}
exports.InGameState = InGameState;
class InGameModal extends Modal_1.Modal {
    constructor() {
        super();
        this.text = this.AddDiv('loading', 'In game!');
    }
}
//# sourceMappingURL=InGameState.js.map