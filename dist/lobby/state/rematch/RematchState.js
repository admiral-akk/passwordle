"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RematchState = void 0;
const PlayerState_1 = require("../../../public/PlayerState");
const MatchState_1 = require("../match/MatchState");
const MenuState_1 = require("../menu/MenuState");
const Modal_1 = require("../Modal");
var State;
(function (State) {
    State[State["None"] = 0] = "None";
    State[State["RematchDeclined"] = 1] = "RematchDeclined";
    State[State["RematchRequested"] = 2] = "RematchRequested";
})(State || (State = {}));
class RematchState extends PlayerState_1.LobbyState {
    constructor() {
        super();
        this.modal = new RematchModal(() => this.RequestRematch(), () => this.ReturnToMenu());
        this.state = State.None;
    }
    Enter() { }
    Exit() {
        return this.modal.RematchExit(this.state);
    }
    Register(socket) {
        socket.on('EnterMenu', (lobbyId) => {
            this.state = State.RematchDeclined;
            this.EnterMenu(lobbyId);
        });
    }
    Deregister(socket) {
        socket.removeAllListeners('EnterMenu');
    }
    RequestRematch() {
        var _a;
        this.state = State.RematchRequested;
        (_a = this.socket) === null || _a === void 0 ? void 0 : _a.emit('RequestRematch');
    }
    ReturnToMenu() {
        var _a;
        this.state = State.RematchDeclined;
        (_a = this.socket) === null || _a === void 0 ? void 0 : _a.emit('DeclineRematch');
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
    RematchExit(state) {
        return new Promise(resolve => {
            if (state === State.RematchDeclined) {
                resolve(this.RematchDeclined());
            }
            else {
                resolve(this.RematchAccepted());
            }
        })
            .then(() => new Promise(resolve => setTimeout(resolve, 1500)))
            .then(() => super.Exit());
    }
    RematchDeclined() {
        this.AddDiv('rematch-text', 'Rematch declined, returning to menu.');
    }
    RematchAccepted() {
        this.AddDiv('rematch-text', 'Rematch accepted. Good luck!');
    }
    constructor(requestRematch, returnToMenu) {
        super();
        this.AddButton('request-rematch', 'Request Rematch', requestRematch);
        this.AddButton('to-menu', 'Return to Menu', returnToMenu);
    }
}
//# sourceMappingURL=RematchState.js.map