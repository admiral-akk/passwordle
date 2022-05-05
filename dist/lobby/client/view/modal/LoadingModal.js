"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingModal = void 0;
const Modal_1 = require("./Modal");
class LoadingModal extends Modal_1.BaseModal {
    constructor(modal) {
        super();
        this.text = this.AddDiv(modal, 'Loading...');
    }
    Enter() {
        this.text.style.display = 'block';
    }
    Exit() {
        this.text.remove();
    }
}
exports.LoadingModal = LoadingModal;
//# sourceMappingURL=LoadingModal.js.map