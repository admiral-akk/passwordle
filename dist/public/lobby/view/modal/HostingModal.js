"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostingModal = void 0;
class HostingModal {
    constructor(modal, copyToClipboard) {
        this.shareLink = AddButton(modal, 'Share Link', copyToClipboard);
        this.text = AddDiv(modal, 'div');
    }
    Enter() {
        this.shareLink.style.display = 'block';
        this.text.style.display = 'block';
    }
    Exit() {
        this.shareLink.remove();
        this.text.remove();
    }
}
exports.HostingModal = HostingModal;
function AddButton(parent, name, callback) {
    const button = document.createElement('button');
    button.style.display = 'none';
    button.className = 'host-button';
    button.innerText = name;
    button.addEventListener('click', callback);
    parent.appendChild(button);
    return button;
}
function AddDiv(parent, text) {
    const div = document.createElement('div');
    div.style.display = 'none';
    div.innerText = text;
    parent.appendChild(div);
    return div;
}
//# sourceMappingURL=HostingModal.js.map