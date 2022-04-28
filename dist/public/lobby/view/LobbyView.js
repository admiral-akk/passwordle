"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyView = void 0;
const HostingModal_1 = require("./modal/HostingModal");
const MenuModal_1 = require("./modal/MenuModal");
class LobbyView {
    constructor() {
        this.root = document.getElementById('lobby');
        this.background = document.createElement('div');
        this.modal = document.createElement('div');
        this.modal = document.createElement('div');
        this.modal.className = 'modal';
        this.background.appendChild(this.modal);
        this.background.className = 'background';
        this.root.appendChild(this.background);
        this.currentModal = null;
    }
    SetModal(newModal) {
        if (this.currentModal) {
            this.currentModal.Exit();
        }
        this.currentModal = newModal;
        this.currentModal.Enter();
    }
    Menu(hostLobby, matchmake) {
        this.SetModal(new MenuModal_1.MenuModal(this.modal, hostLobby, matchmake));
    }
    HostingMatch(link) {
        this.SetModal(new HostingModal_1.HostingModal(this.modal, () => CopyToClipboard(link)));
    }
}
exports.LobbyView = LobbyView;
function CopyToClipboard(url) {
    navigator.clipboard.writeText(url);
}
//# sourceMappingURL=LobbyView.js.map