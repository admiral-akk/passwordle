"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameEndedModal = void 0;
class GameEndedModal {
    constructor(modal) {
        this.text = AddDiv(modal, 'Game over! Returning to menu...');
    }
    Enter() {
        this.text.style.display = 'block';
    }
    Exit() {
        this.text.remove();
    }
}
exports.GameEndedModal = GameEndedModal;
function AddDiv(parent, text) {
    const div = document.createElement('div');
    div.style.display = 'none';
    div.innerText = text;
    parent.appendChild(div);
    return div;
}
//# sourceMappingURL=GameEndedModal.js.map