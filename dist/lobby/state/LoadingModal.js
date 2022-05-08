"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingModal = void 0;
const Modal_1 = require("./Modal");
class LoadingModal extends Modal_1.Modal {
    constructor() {
        super();
        this.AddDiv('loading', 'Loading...');
    }
}
exports.LoadingModal = LoadingModal;
//# sourceMappingURL=LoadingModal.js.map