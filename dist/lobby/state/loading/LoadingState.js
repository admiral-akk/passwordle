"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingState = void 0;
const PlayerState_1 = require("../../../public/PlayerState");
const LobbyId_1 = require("../../LobbyId");
const MatchState_1 = require("../match/MatchState");
const MenuState_1 = require("../menu/MenuState");
const Modal_1 = require("../Modal");
var State;
(function (State) {
    State[State["None"] = 0] = "None";
    State[State["LoadingMenu"] = 1] = "LoadingMenu";
    State[State["JoiningLobby"] = 2] = "JoiningLobby";
})(State || (State = {}));
class LoadingState extends PlayerState_1.LobbyState {
    constructor() {
        super();
        this.modal = new LoadingModal();
        this.state = State.None;
    }
    Enter() {
        const lobbyId = (0, LobbyId_1.FindLobbyIdInURL)();
        if (lobbyId) {
            this.state = State.JoiningLobby;
            this.JoinLobby(lobbyId);
        }
        else {
            this.state = State.LoadingMenu;
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
        switch (this.state) {
            case State.JoiningLobby:
                this.modal.LobbyNotFound();
                break;
            case State.LoadingMenu:
                break;
        }
        setTimeout(() => this.SwitchState(new MenuState_1.MenuState(lobbyId)), 1500);
    }
    MatchFound(lobbyId) {
        this.modal.LobbyFound();
        this.SwitchState(new MatchState_1.MatchState(lobbyId));
    }
    RequestLobbyId() {
        var _a;
        this.modal.LoadingMenu();
        (_a = this.socket) === null || _a === void 0 ? void 0 : _a.emit('RequestLobbyId');
    }
    JoinLobby(lobbyId) {
        var _a;
        this.modal.JoiningLobby();
        (_a = this.socket) === null || _a === void 0 ? void 0 : _a.emit('JoinLobby', lobbyId);
    }
}
exports.LoadingState = LoadingState;
class LoadingModal extends Modal_1.Modal {
    constructor() {
        super();
        this.text = this.AddDiv('loading', 'Loading...');
    }
    LoadingMenu() {
        this.text.innerText = 'Loading main menu...';
    }
    JoiningLobby() {
        this.text.innerText = 'Trying to join existing lobby...';
    }
    LobbyNotFound() {
        this.text.innerText = 'Lobby not found. Entering menu...';
    }
    LobbyFound() {
        this.text.innerText = 'Lobby found. Entering menu...';
    }
}
//# sourceMappingURL=LoadingState.js.map