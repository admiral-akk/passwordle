"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RematchState = void 0;
const LetterView_1 = require("../../../game/model/view/word/letter/LetterView");
const WordView_1 = require("../../../game/model/view/word/WordView");
const LobbyState_1 = require("../LobbyState");
const EndGameState_1 = require("../../../structs/EndGameState");
const MenuState_1 = require("../menu/MenuState");
const Modal_1 = require("../Modal");
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
        this.container = this.AddDiv('rematch-container');
        this.AddMatchOutcome(endState);
        this.rematchDiv = this.AddRootDiv(this.container, 'rematch-text');
        const buttons = this.AddRootDiv(this.container, 'menu-buttons');
        this.AddButton(buttons, 'to-menu', 'Return to Menu', () => {
            this.rematchButton.disabled = true;
            returnToMenu();
        });
        this.rematchButton = this.AddButton(buttons, 'request-rematch', 'Request Rematch', () => {
            requestRematch();
            this.RematchRequested();
            this.rematchButton.disabled = true;
        });
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
    RematchRequested() {
        this.rematchDiv.innerText = 'Rematch requested. Waiting for opponent.';
    }
    AddMatchOutcome(endState) {
        const answerDiv = this.AddRootDiv(this.container, 'match-answers');
        let text;
        switch ((0, EndGameState_1.GetEndGameState)(endState)) {
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
        }
        this.AddRootDiv(answerDiv, 'match-outcome', text);
        const yourPasswordContainer = this.AddRootDiv(answerDiv, 'rematch-answer');
        const yourPasswordText = this.AddRootDiv(yourPasswordContainer, 'rematch-password-text', '');
        const yourContainer = this.AddRootDiv(yourPasswordContainer, 'rematch-password-container');
        const yourPassword = new RematchWordView(yourContainer);
        yourPassword.SetState(endState.yourPassword, endState.opponentProgress, LetterView_1.LetterColor.Red);
        const opponentPasswordContainer = this.AddRootDiv(answerDiv, 'rematch-answer');
        const opponentPasswordText = this.AddRootDiv(opponentPasswordContainer, 'rematch-password-text', '');
        const opponentContainer = this.AddRootDiv(opponentPasswordContainer, 'rematch-password-container');
        const opponentPassword = new RematchWordView(opponentContainer);
        opponentPassword.SetState(endState.opponentPassword, endState.yourProgress, LetterView_1.LetterColor.Green);
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