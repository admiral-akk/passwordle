"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyReadyModal = void 0;
const Modal_1 = require("./Modal");
class LobbyReadyModal extends Modal_1.BaseModal {
    constructor(modal) {
        super();
        this.text = this.AddDiv(modal, 'Match found! Good luck!');
    }
    Enter() {
        this.text.style.display = 'block';
    }
    Exit() {
        this.text.remove();
    }
}
exports.LobbyReadyModal = LobbyReadyModal;
//# sourceMappingURL=LobbyReadyModal.js.map