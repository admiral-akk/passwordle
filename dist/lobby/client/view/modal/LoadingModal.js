"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingModal = void 0;
class LoadingModal {
    constructor(modal) {
        this.text = AddDiv(modal, 'Loading...');
    }
    Enter() {
        this.text.style.display = 'block';
    }
    Exit() {
        this.text.remove();
    }
}
exports.LoadingModal = LoadingModal;
function AddDiv(parent, text) {
    const div = document.createElement('div');
    div.style.display = 'none';
    div.innerText = text;
    parent.appendChild(div);
    return div;
}
//# sourceMappingURL=LoadingModal.js.map