"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindingMatchModal = void 0;
class FindingMatchModal {
    constructor(modal) {
        this.text = AddDiv(modal, 'Finding Match...');
    }
    Enter() {
        this.text.style.display = 'block';
    }
    Exit() {
        this.text.remove();
    }
}
exports.FindingMatchModal = FindingMatchModal;
function AddDiv(parent, text) {
    const div = document.createElement('div');
    div.style.display = 'none';
    div.innerText = text;
    parent.appendChild(div);
    return div;
}
//# sourceMappingURL=FindingMatchModal.js.map