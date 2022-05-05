"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostingModal = void 0;
const Modal_1 = require("./Modal");
class HostingModal extends Modal_1.Modal {
    constructor(modal, copyToClipboard) {
        super();
        this.shareLink = this.AddButton(modal, 'Share Link', copyToClipboard);
        this.text = this.AddDiv(modal, 'Share the link');
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
//# sourceMappingURL=HostingModal.js.map