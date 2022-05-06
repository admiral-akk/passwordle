"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuModal = void 0;
const Modal_1 = require("./Modal");
class MenuModal extends Modal_1.BaseModal {
    constructor(modal, hostLobby, matchmake) {
        super();
        const privateDiv = this.AddDiv(modal, '', 'private-game');
        this.AddButton(privateDiv, 'private-game', 'Copy Link to Clipboard', hostLobby);
        const publicDiv = this.AddDiv(modal, '', 'public-game');
        this.AddButton(publicDiv, 'public-game', 'Join Random Game', matchmake);
    }
}
exports.MenuModal = MenuModal;
//# sourceMappingURL=MenuModal.js.map