"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuState = void 0;
const Popup_1 = require("../../../game/model/view/Popup");
const PlayerState_1 = require("../../../public/PlayerState");
const LobbyId_1 = require("../../LobbyId");
const Modal_1 = require("../Modal");
class MenuState extends PlayerState_1.LobbyState {
    constructor(lobbyId) {
        super();
        this.lobbyId = lobbyId;
        this.modal = null;
    }
    Enter() {
        this.modal = new MenuModal(() => this.CopyLobbyLinkToClipboard(), () => this.Matchmake());
    }
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
        this.AddDiv('explain-game', `In Passwordle, each player has a different password.

    The winner is the first to figure out their opponent's password.
    
    However, each guess gives clues to both players. For example:
    
    If your password is 'FLAME', and you guess 'FLEET', then your opponent will see that your password is 'FL___' and contains an 'E'.`);
        this.copyLinkButton = this.AddButton('private-game', 'Copy Link to Clipboard', () => {
            hostLobby();
            this.CopyLinkPopup();
        });
        this.matchmakingButton = this.AddButton('public-game', 'Join Random Game', () => matchmake());
    }
    Exit() {
        return Promise.resolve(this.EnteringMatch())
            .then(() => new Promise(resolve => setTimeout(resolve, 1000)))
            .then(() => super.Exit());
    }
    EnteringMatch() {
        this.AddDiv('entering-match', 'Entering match. Good luck!');
    }
    CopyLinkPopup() {
        (0, Popup_1.AddPopup)(this.copyLinkButton, 'Link copied to clipboard!', 1.5);
    }
    EnterMatchmaking() {
        this.matchmakingButton.disabled = true;
        this.matchmakingButton.innerText = 'Looking for match...';
    }
}
//# sourceMappingURL=MenuState.js.map