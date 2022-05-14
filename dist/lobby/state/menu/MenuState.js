"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuState = void 0;
const Animate_1 = require("../../../game/model/view/Animate");
const LobbyState_1 = require("../LobbyState");
const LobbyId_1 = require("../../../structs/LobbyId");
const Modal_1 = require("../Modal");
class MenuState extends LobbyState_1.LobbyState {
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
        this.fallbackCopyTextToClipboard(url);
    }
    Matchmake() {
        this.modal.EnterMatchmaking();
        this.socket.emit('FindMatch');
    }
    fallbackCopyTextToClipboard(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        // Avoid scrolling to bottom
        textArea.style.top = '0';
        textArea.style.left = '0';
        textArea.style.position = 'fixed';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            const successful = document.execCommand('copy');
            const msg = successful ? 'successful' : 'unsuccessful';
            console.log('Fallback: Copying text command was ' + msg);
        }
        catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }
        document.body.removeChild(textArea);
    }
}
exports.MenuState = MenuState;
class MenuModal extends Modal_1.Modal {
    constructor(hostLobby, matchmake) {
        super();
        // this.AddDiv(
        //   'explain-game',
        //   `In Passwordle, each player has a different password.
        // The winner is the first to figure out their opponent's password.
        // However, each guess gives clues to both players. For example:
        // If your password is 'FLAME', and you guess 'FLEET', then your opponent will see that your password is 'FL___' and contains an 'E'.`
        // );
        const menuContainer = this.AddDiv('menu-container');
        this.stateText = this.AddRootDiv(menuContainer, 'menu-state', 'Waiting for opponent');
        const buttons = this.AddRootDiv(menuContainer, 'menu-button-container');
        this.copyLinkButton = this.AddButton(buttons, 'menu-button', 'Invite Friend', () => {
            hostLobby();
            this.CopyLinkPopup();
        });
        this.matchmakingButton = this.AddButton(buttons, 'menu-button', 'Find Game', () => matchmake());
    }
    Exit() {
        return Promise.resolve(this.EnteringMatch())
            .then(() => new Promise(resolve => setTimeout(resolve, 1000)))
            .then(() => super.Exit());
    }
    EnteringMatch() {
        this.stateText.innerText = 'Entering match. Good luck!';
    }
    CopyLinkPopup() {
        (0, Animate_1.AddPopup)(this.copyLinkButton, 'Link copied to clipboard!', 1.5);
    }
    EnterMatchmaking() {
        this.matchmakingButton.disabled = true;
        this.stateText.innerText = 'Looking for match...';
    }
}
//# sourceMappingURL=MenuState.js.map