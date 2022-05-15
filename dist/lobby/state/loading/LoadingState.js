"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingState = void 0;
const LobbyState_1 = require("../LobbyState");
const LobbyId_1 = require("../../../structs/LobbyId");
const MenuState_1 = require("../menu/MenuState");
const Modal_1 = require("../Modal");
var State;
(function (State) {
    State[State["None"] = 0] = "None";
    State[State["LoadingMenu"] = 1] = "LoadingMenu";
    State[State["JoiningLobby"] = 2] = "JoiningLobby";
    State[State["LobbyNotFound"] = 3] = "LobbyNotFound";
    State[State["EnteredLobby"] = 4] = "EnteredLobby";
})(State || (State = {}));
class LoadingState extends LobbyState_1.LobbyState {
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
        return this.modal.LoadingExit(this.state);
    }
    Register(socket) {
        socket.on('EnterMenu', (lobbyId) => {
            if (this.state === State.EnteredLobby) {
                return;
            }
            if (this.state === State.JoiningLobby) {
                this.state = State.LobbyNotFound;
            }
            this.EnterMenu(lobbyId);
            this.state = State.EnteredLobby;
        });
    }
    Deregister(socket) {
        console.log('deregsitering loading');
        socket.removeAllListeners('EnterMenu');
    }
    EnterMenu(lobbyId) {
        console.log('entering menu from loading.');
        this.SwitchState(new MenuState_1.MenuState(lobbyId));
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
    LoadingExit(state) {
        return new Promise(resolve => {
            switch (state) {
                case State.LobbyNotFound:
                    this.LobbyNotFound();
                    break;
            }
            setTimeout(resolve, 1500);
        }).then(() => super.Exit());
    }
    LoadingMenu() {
        this.text.innerText = 'Loading menu...';
    }
    JoiningLobby() {
        this.text.innerText = 'Joining game...';
    }
    LobbyNotFound() {
        this.text.innerText = 'Lobby not found.';
    }
    LobbyFound() {
        this.text.innerText = 'Lobby found. Entering menu...';
    }
}
//# sourceMappingURL=LoadingState.js.map