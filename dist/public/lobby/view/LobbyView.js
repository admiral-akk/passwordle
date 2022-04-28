"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyView = void 0;
const LobbyMenuView_1 = require("./LobbyMenuView");
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
        this.SetModal(new LobbyMenuView_1.LobbyMenuView(this.modal, hostLobby, matchmake));
    }
    HostingMatch(shareUrl) { }
    CopyToClipboard(url) {
        navigator.clipboard.writeText(url);
    }
}
exports.LobbyView = LobbyView;
function AddButton(parent, name, callback) {
    const button = document.createElement('button');
    button.className = 'host-button';
    button.innerText = name;
    button.addEventListener('click', callback);
    parent.appendChild(button);
}
//# sourceMappingURL=LobbyView.js.map