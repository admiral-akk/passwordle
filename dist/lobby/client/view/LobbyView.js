"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyView = void 0;
const FindingMatchModal_1 = require("./modal/FindingMatchModal");
const GameEndedModal_1 = require("./modal/GameEndedModal");
const LoadingModal_1 = require("./modal/LoadingModal");
const LobbyReadyModal_1 = require("./modal/LobbyReadyModal");
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
    Loading() {
        this.SetModal(new LoadingModal_1.LoadingModal(this.modal));
    }
    GameEnded() {
        this.background.style.display = 'block';
        console.log('Game ended modal triggered!');
        this.SetModal(new GameEndedModal_1.GameEndedModal(this.modal));
    }
    Menu(hostLobby, matchmake) {
        this.SetModal(new MenuModal_1.MenuModal(this.modal, hostLobby, matchmake));
    }
    FindingMatch() {
        this.SetModal(new FindingMatchModal_1.FindingMatchModal(this.modal));
    }
    LobbyReady() {
        this.SetModal(new LobbyReadyModal_1.LobbyReadyModal(this.modal));
    }
    InGame() {
        if (this.currentModal) {
            this.currentModal.Exit();
        }
        this.currentModal = null;
        this.background.style.display = 'none';
    }
}
exports.LobbyView = LobbyView;
//# sourceMappingURL=LobbyView.js.map