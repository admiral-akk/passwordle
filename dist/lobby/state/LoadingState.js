"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingState = void 0;
const PlayerState_1 = require("../../public/PlayerState");
const LobbyId_1 = require("../LobbyId");
const LoadingModal_1 = require("./LoadingModal");
const MenuState_1 = require("./MenuState");
class LoadingState extends PlayerState_1.LobbyState {
    constructor(socket, setState) {
        super();
        this.modal = new LoadingModal_1.LoadingModal();
        this.Initialize(socket, setState);
    }
    Enter() {
        const lobbyId = (0, LobbyId_1.FindLobbyIdInURL)();
        if (lobbyId) {
            this.JoinLobby(lobbyId);
        }
        else {
            this.RequestLobbyId();
        }
    }
    Exit() {
        this.modal.Exit();
    }
    Register(socket) {
        socket.on('EnterMenu', (lobbyId) => {
            this.EnterMenu(lobbyId);
        });
        socket.on('MatchFound', (lobbyId) => {
            this.MatchFound(lobbyId);
        });
    }
    Deregister(socket) {
        socket.removeAllListeners('EnterMenu');
        socket.removeAllListeners('MatchFound');
    }
    EnterMenu(lobbyId) {
        this.SwitchState(new MenuState_1.MenuState(lobbyId));
    }
    MatchFound(lobbyId) { }
    RequestLobbyId() {
        var _a;
        (_a = this.socket) === null || _a === void 0 ? void 0 : _a.emit('RequestLobbyId');
    }
    JoinLobby(lobbyId) {
        var _a;
        (_a = this.socket) === null || _a === void 0 ? void 0 : _a.emit('JoinLobby', lobbyId);
    }
}
exports.LoadingState = LoadingState;
//# sourceMappingURL=LoadingState.js.map