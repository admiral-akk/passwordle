"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RematchState = void 0;
const PlayerState_1 = require("../../../public/PlayerState");
const EndGameState_1 = require("../../../util/struct/EndGameState");
const MenuState_1 = require("../menu/MenuState");
const Modal_1 = require("../Modal");
var State;
(function (State) {
    State[State["None"] = 0] = "None";
    State[State["RematchDeclined"] = 1] = "RematchDeclined";
    State[State["RematchRequested"] = 2] = "RematchRequested";
})(State || (State = {}));
class RematchState extends PlayerState_1.LobbyState {
    constructor(endState) {
        super();
        this.endState = endState;
        this.state = State.None;
        this.modal = new RematchModal(() => this.RequestRematch(), () => this.ReturnToMenu(), this.endState);
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
    EnterMenu(lobbyId) {
        this.SwitchState(new MenuState_1.MenuState(lobbyId));
    }
}
exports.RematchState = RematchState;
class RematchModal extends Modal_1.Modal {
    constructor(requestRematch, returnToMenu, endState) {
        super();
        this.AddDiv('explain-game', `In Passwordle, each player has a different password.

    The winner is the first to figure out their opponent's password.
    
    However, each guess gives clues to both players. For example:
    
    If your password is 'FLAME', and you guess 'FLEET', then your opponent will see that your password is 'FL___' and contains an 'E'.`);
        this.AddDiv('menu-seperator');
        this.AddMatchOutcome(endState);
        this.AddDiv('menu-seperator');
        this.rematchDiv = this.AddDiv('rematch-text');
        const buttons = this.AddDiv('menu-buttons');
        this.AddButton(buttons, 'to-menu', 'Return to Menu', returnToMenu);
        this.AddButton(buttons, 'request-rematch', 'Request Rematch', requestRematch);
    }
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
        this.rematchDiv.innerText = 'Rematch declined, returning to menu.';
    }
    RematchAccepted() {
        this.rematchDiv.innerText = 'Rematch accepted. Good luck!';
    }
    AddMatchOutcome(endState) {
        let text;
        switch ((0, EndGameState_1.GetEndGameState)(endState)) {
            default:
                text = '';
                break;
            case EndGameState_1.EndGameState.Loss:
                text =
                    'You lost!\n' +
                        `Your password: ${endState.yourPassword}\n` +
                        `Your opponent's password: ${endState.opponentPassword}`;
                break;
            case EndGameState_1.EndGameState.Win:
                text =
                    'You won!\n' +
                        `Your password: ${endState.yourPassword}\n` +
                        `Your opponent's password: ${endState.opponentPassword}`;
                break;
            case EndGameState_1.EndGameState.Tie:
                text =
                    'You tied!\n' +
                        `Your password: ${endState.yourPassword}\n` +
                        `Your opponent's password: ${endState.opponentPassword}`;
                break;
        }
        return this.AddDiv('match-outcome', text);
    }
}
//# sourceMappingURL=RematchState.js.map