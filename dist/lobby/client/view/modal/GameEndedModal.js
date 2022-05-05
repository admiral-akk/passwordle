"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameEndedModal = void 0;
const Modal_1 = require("./Modal");
class GameEndedModal extends Modal_1.BaseModal {
    constructor(modal) {
        super();
        this.text = this.AddDiv(modal, 'Game over! Returning to menu...');
    }
    Enter() {
        this.text.style.display = 'block';
    }
    Exit() {
        this.text.remove();
    }
}
exports.GameEndedModal = GameEndedModal;
//# sourceMappingURL=GameEndedModal.js.map