"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindingMatchModal = void 0;
const Modal_1 = require("./Modal");
class FindingMatchModal extends Modal_1.BaseModal {
    constructor(modal) {
        super();
        this.text = this.AddDiv(modal, 'Finding Match...');
    }
    Enter() {
        this.text.style.display = 'block';
    }
    Exit() {
        this.text.remove();
    }
}
exports.FindingMatchModal = FindingMatchModal;
//# sourceMappingURL=FindingMatchModal.js.map