"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RematchState = void 0;
const PlayerState_1 = require("../../../public/PlayerState");
const MatchState_1 = require("../match/MatchState");
const MenuState_1 = require("../menu/MenuState");
const Modal_1 = require("../Modal");
class RematchState extends PlayerState_1.LobbyState {
    constructor() {
        super();
        this.modal = new RematchModal(() => this.RequestRematch(), () => this.ReturnToMenu());
    }
    Enter() { }
    Exit() {
        this.modal.Exit();
    }
    Register(socket) {
        socket.on('MatchFound', (lobbyId) => {
            this.MatchFound(lobbyId);
        });
        socket.on('EnterMenu', (lobbyId) => {
            this.EnterMenu(lobbyId);
        });
    }
    Deregister(socket) {
        socket.removeAllListeners('MatchFound');
        socket.removeAllListeners('EnterMenu');
    }
    RequestRematch() {
        var _a;
        (_a = this.socket) === null || _a === void 0 ? void 0 : _a.emit('RequestRematch');
    }
    ReturnToMenu() {
        var _a;
        (_a = this.socket) === null || _a === void 0 ? void 0 : _a.emit('RequestLobbyId');
    }
    MatchFound(lobbyId) {
        this.SwitchState(new MatchState_1.MatchState(lobbyId));
    }
    EnterMenu(lobbyId) {
        this.SwitchState(new MenuState_1.MenuState(lobbyId));
    }
}
exports.RematchState = RematchState;
class RematchModal extends Modal_1.Modal {
    constructor(requestRematch, returnToMenu) {
        super();
        this.AddButton('request-rematch', 'Request Rematch', requestRematch);
        this.AddButton('to-menu', 'Return to Menu', returnToMenu);
    }
}
//# sourceMappingURL=RematchState.js.map