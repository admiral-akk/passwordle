"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuModal = void 0;
const Modal_1 = require("./Modal");
class MenuModal extends Modal_1.BaseModal {
    constructor(modal, hostLobby, matchmake) {
        super();
        this.privateGame = this.AddButton(modal, 'Copy Link to Clipboard', hostLobby);
        this.publicGame = this.AddButton(modal, 'Join Random Game', matchmake);
    }
    Enter() {
        this.privateGame.style.display = 'block';
        this.publicGame.style.display = 'block';
    }
    Exit() {
        this.privateGame.remove();
        this.publicGame.remove();
    }
}
exports.MenuModal = MenuModal;
//# sourceMappingURL=MenuModal.js.map