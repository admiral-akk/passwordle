"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RematchState = void 0;
const LetterView_1 = require("../../../game/model/view/word/letter/LetterView");
const WordView_1 = require("../../../game/model/view/word/WordView");
const LobbyState_1 = require("../LobbyState");
const EndGameState_1 = require("../../../structs/EndGameState");
const MenuState_1 = require("../menu/MenuState");
const Modal_1 = require("../Modal");
const Animate_1 = require("../../../game/model/view/Animate");
var State;
(function (State) {
    State[State["None"] = 0] = "None";
    State[State["RematchDeclined"] = 1] = "RematchDeclined";
    State[State["RematchRequested"] = 2] = "RematchRequested";
})(State || (State = {}));
class RematchState extends LobbyState_1.LobbyState {
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
        socket.on('RematchRequested', () => {
            this.modal.RematchRequested();
        });
    }
    Deregister(socket) {
        socket.removeAllListeners('EnterMenu');
        socket.removeAllListeners('RematchRequested');
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
        super('rematch');
        this.AddMatchOutcome(endState);
        this.rematchDiv = this.AddDiv('rematch-text');
        const buttons = this.AddDiv('menu-button-container');
        this.returnToMenuButton = this.AddButton('menu-button', 'Return to Menu', () => {
            this.rematchButton.disabled = true;
            returnToMenu();
        }, buttons);
        this.rematchButton = this.AddButton('menu-button', 'Request Rematch', () => {
            requestRematch();
            this.RequestingRematch();
            this.rematchButton.disabled = true;
        }, buttons);
        if (endState.endState === EndGameState_1.EndGameState.Disconnected) {
            this.rematchButton.style.display = 'none';
        }
    }
    RematchExit(state) {
        return new Promise(resolve => {
            this.rematchButton.disabled = true;
            this.returnToMenuButton.disabled = true;
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
        this.rematchDiv.innerText = 'Returning to menu.';
    }
    RematchAccepted() {
        this.rematchDiv.innerText = 'Rematch accepted!';
    }
    RematchRequested() {
        this.rematchDiv.innerText = 'They requested rematch!';
        this.rematchButton.innerText = 'Accept Rematch';
    }
    RequestingRematch() {
        this.rematchDiv.innerText = 'Waiting for response...';
        (0, Animate_1.AddPopup)(this.container, 'Rematch requested!', 350, 'white');
    }
    AddMatchOutcome(endState) {
        const answerDiv = this.AddDiv('match-answers');
        let text;
        switch (endState.endState) {
            default:
                text = '';
                break;
            case EndGameState_1.EndGameState.Loss:
                text = 'You lost!';
                break;
            case EndGameState_1.EndGameState.Win:
                text = 'You won!';
                break;
            case EndGameState_1.EndGameState.Tie:
                text = 'You tied!';
                break;
            case EndGameState_1.EndGameState.Disconnected:
                text = 'They forfeit!';
                break;
        }
        this.AddDiv('match-outcome', text, answerDiv);
        const yourPasswordContainer = this.AddDiv('rematch-answer', '', answerDiv);
        const yourContainer = this.AddDiv('rematch-password-container', '', yourPasswordContainer);
        const yourPassword = new RematchWordView(yourContainer);
        yourPassword.SetState(endState.yourPassword, endState.yourProgress, LetterView_1.LetterColor.Red);
        const opponentPasswordContainer = this.AddDiv('rematch-answer', '', answerDiv);
        const opponentContainer = this.AddDiv('rematch-password-container', '', opponentPasswordContainer);
        const opponentPassword = new RematchWordView(opponentContainer);
        opponentPassword.SetState(endState.opponentPassword, endState.opponentProgress, LetterView_1.LetterColor.Green);
    }
}
class RematchWordView extends WordView_1.BaseWordView {
    SetState(password, progress, color) {
        for (let i = 0; i < password.length; i++) {
            this.letters[i].SetChar(password[i]);
            if (progress.knownCharacters[i] !== '') {
                this.letters[i].SetColor(color);
            }
        }
    }
}
//# sourceMappingURL=RematchState.js.map