"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuModal = void 0;
const Modal_1 = require("./Modal");
class MenuModal extends Modal_1.Modal {
    constructor(hostLobby, matchmake) {
        super();
        this.AddButton('private-game', 'Copy Link to Clipboard', hostLobby);
        this.AddButton('public-game', 'Join Random Game', matchmake);
    }
}
exports.MenuModal = MenuModal;
//# sourceMappingURL=MenuModal.js.map