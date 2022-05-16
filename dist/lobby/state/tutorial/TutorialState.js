"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TutorialState = void 0;
const LobbyId_1 = require("../../../structs/LobbyId");
const LobbyState_1 = require("../LobbyState");
const MenuState_1 = require("../menu/MenuState");
const Modal_1 = require("../Modal");
class TutorialState extends LobbyState_1.LobbyState {
    constructor() {
        super(...arguments);
        this.modal = new SimpleTutorialModal();
    }
    Enter() {
        const lobbyId = (0, LobbyId_1.FindLobbyIdInURL)();
        if (lobbyId) {
            this.modal.SetExitCallback(() => this.JoinLobby(lobbyId), State.JoinLobby);
        }
        else {
            this.RequestLobbyId();
        }
    }
    Exit() {
        return this.modal.Exit();
    }
    Register(socket) {
        socket.on('EnterMenu', (lobbyId) => {
            this.modal.SetExitCallback(() => this.EnterMenu(lobbyId), State.EnterMenu);
        });
    }
    EnterMenu(lobbyId) {
        this.SwitchState(new MenuState_1.MenuState(lobbyId));
    }
    RequestLobbyId() {
        var _a;
        (_a = this.socket) === null || _a === void 0 ? void 0 : _a.emit('RequestLobbyId');
    }
    JoinLobby(lobbyId) {
        var _a;
        (_a = this.socket) === null || _a === void 0 ? void 0 : _a.emit('JoinLobby', lobbyId);
    }
    Deregister(socket) {
        socket.removeAllListeners('EnterMenu');
    }
}
exports.TutorialState = TutorialState;
var State;
(function (State) {
    State[State["None"] = 0] = "None";
    State[State["JoinLobby"] = 1] = "JoinLobby";
    State[State["EnterMenu"] = 2] = "EnterMenu";
})(State || (State = {}));
const TEXT = [
    '<strong>You</strong> are trying to guess <strong>their</strong> password.',
    '<strong>They</strong> are trying to guess <strong>your</strong> password.',
    '<em>Both</em> your and their guess will show <strong>you</strong> clues for <strong>their</strong> password.',
    '<em>Both</em> your and their guess will show <strong>them</strong> clues for <strong>your</strong> password.',
    'If they submit a guess first, you have <em>30 seconds</em> to submit a guess.',
    '<em>Win</em> by guessing their password <em>before</em> they guess yours.',
];
class SimpleTutorialModal extends Modal_1.Modal {
    constructor() {
        super('tutorial');
        this.state = State.None;
        const textContainer = this.AddDiv('tutorial-text-container');
        for (let i = 0; i < TEXT.length; i++) {
            if (i > 0 && i % 2 === 0) {
                this.AddDiv('tutorial-text-seperator', '', textContainer);
            }
            this.AddParagraph('tutorial-text-paragraph', TEXT[i], textContainer);
        }
        const exitContainer = this.AddDiv('tutorial-exit-container');
        this.exitButton = this.AddButton('exit-button', 'Enter Game', () => { }, exitContainer);
    }
    SetExitCallback(callback, type) {
        this.state = type;
        this.exitButton.onclick = callback;
    }
}
//# sourceMappingURL=TutorialState.js.map