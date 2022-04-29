"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyReadyModal = void 0;
class LobbyReadyModal {
    constructor(modal) {
        this.text = AddDiv(modal, 'Match found! Good luck!');
    }
    Enter() {
        this.text.style.display = 'block';
    }
    Exit() {
        this.text.remove();
    }
}
exports.LobbyReadyModal = LobbyReadyModal;
function AddDiv(parent, text) {
    const div = document.createElement('div');
    div.style.display = 'none';
    div.innerText = text;
    parent.appendChild(div);
    return div;
}
//# sourceMappingURL=LobbyReadyModal.js.map