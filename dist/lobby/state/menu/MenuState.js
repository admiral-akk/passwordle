"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuState = void 0;
const PlayerState_1 = require("../../../public/PlayerState");
const LobbyId_1 = require("../../LobbyId");
const Modal_1 = require("../Modal");
class MenuState extends PlayerState_1.LobbyState {
    constructor(lobbyId) {
        super();
        this.lobbyId = lobbyId;
        this.modal = new MenuModal(() => this.CopyLobbyLinkToClipboard(), () => this.Matchmake());
    }
    Enter() { }
    Exit() {
        return this.modal.Exit();
    }
    Register(socket) { }
    Deregister(socket) { }
    CopyLobbyLinkToClipboard() {
        const url = (0, LobbyId_1.GenerateLobbyLink)(this.lobbyId);
        navigator.clipboard.writeText(url);
    }
    Matchmake() {
        this.modal.EnterMatchmaking();
        this.socket.emit('FindMatch');
    }
}
exports.MenuState = MenuState;
class MenuModal extends Modal_1.Modal {
    constructor(hostLobby, matchmake) {
        super();
        this.copyLinkButton = this.AddButton('private-game', 'Copy Link to Clipboard', () => {
            hostLobby();
            this.CopyLinkPopup();
        });
        this.matchmakingButton = this.AddButton('public-game', 'Join Random Game', () => matchmake());
    }
    CopyLinkPopup() {
        this.AddPopup(this.copyLinkButton, 'Link copied to clipboard!', 1.5);
    }
    EnterMatchmaking() {
        this.matchmakingButton.disabled = true;
        this.matchmakingButton.innerText = 'Looking for match...';
    }
}
//# sourceMappingURL=MenuState.js.map