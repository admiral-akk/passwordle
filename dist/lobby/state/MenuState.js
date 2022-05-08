"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuState = void 0;
const PlayerState_1 = require("../../public/PlayerState");
const LobbyId_1 = require("../LobbyId");
const MenuModal_1 = require("./MenuModal");
class MenuState extends PlayerState_1.LobbyState {
    constructor(lobbyId) {
        super();
        this.lobbyId = lobbyId;
        this.modal = new MenuModal_1.MenuModal(() => this.CopyLobbyLinkToClipboard(), () => this.Matchmake());
    }
    Enter() { }
    Exit() {
        this.modal.Exit();
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
        (_a = this.socket) === null || _a === void 0 ? void 0 : _a.emit('FindMatch');
    }
    FindingMatch() { }
    MatchFound(lobbyId) { }
}
exports.MenuState = MenuState;
//# sourceMappingURL=MenuState.js.map