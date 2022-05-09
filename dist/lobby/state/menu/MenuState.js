"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuState = void 0;
const PlayerState_1 = require("../../../public/PlayerState");
const LobbyId_1 = require("../../LobbyId");
const FindingMatchState_1 = require("../finding/FindingMatchState");
const MatchState_1 = require("../match/MatchState");
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
    Register(socket) {
        socket.on('FindingMatch', () => {
            this.FindingMatch();
        });
        socket.on('MatchFound', (lobbyId) => {
            this.MatchFound(lobbyId);
        });
    }
    Deregister(socket) {
        socket.removeAllListeners('FindingMatch');
        socket.removeAllListeners('MatchFound');
    }
    CopyLobbyLinkToClipboard() {
        const url = (0, LobbyId_1.GenerateLobbyLink)(this.lobbyId);
        navigator.clipboard.writeText(url);
    }
    Matchmake() {
        var _a;
        this.modal.EnterMatchmaking();
        (_a = this.socket) === null || _a === void 0 ? void 0 : _a.emit('FindMatch');
    }
    FindingMatch() {
        setTimeout(() => this.SwitchState(new FindingMatchState_1.FindingMatchState()), 1500);
    }
    MatchFound(lobbyId) {
        this.SwitchState(new MatchState_1.MatchState(lobbyId));
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
        this.matchmakingButton = this.AddButton('public-game', 'Join Random Game', matchmake);
    }
    CopyLinkPopup() {
        this.AddPopup(this.copyLinkButton, 'Link copied to clipboard!', 1500);
    }
    EnterMatchmaking() {
        this.matchmakingButton.disabled = true;
        this.matchmakingButton.innerText = 'Looking for match...';
    }
}
//# sourceMappingURL=MenuState.js.map