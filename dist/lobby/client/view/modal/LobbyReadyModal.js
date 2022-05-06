"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyReadyModal = void 0;
const Modal_1 = require("./Modal");
class LobbyReadyModal extends Modal_1.BaseModal {
    constructor(modal) {
        super();
        this.AddDiv(modal, 'Match found! Good luck!');
    }
}
exports.LobbyReadyModal = LobbyReadyModal;
//# sourceMappingURL=LobbyReadyModal.js.map