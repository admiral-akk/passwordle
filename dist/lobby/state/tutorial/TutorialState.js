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
        this.modal = new TutorialModal();
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
class TutorialModal extends Modal_1.Modal {
    constructor() {
        super();
        this.pageIndex = 0;
        this.state = State.None;
        this.container = this.AddDiv('tutorial-container');
        const tutorialPageContainer = this.AddRootDiv(this.container, 'tutorial-page-container');
        this.prevButton = this.AddButton(tutorialPageContainer, 'prev-button', '<<', () => {
            if (this.pageIndex > 0) {
                this.SetPage(this.pageIndex - 1);
            }
        });
        const tutorialPage = this.AddRootDiv(tutorialPageContainer, 'tutorial-info-container');
        this.pageNumberDiv = this.AddRootDiv(tutorialPage, 'tutorial-number');
        this.tutorialImage = this.AddImage('', 'tutorial-image', tutorialPage);
        this.tutorialText = this.AddRootDiv(tutorialPage, 'tutorial-text', '');
        this.nextButton = this.AddButton(tutorialPageContainer, 'next-button', '>>', () => {
            if (this.pageIndex < PAGE_COUNT - 1) {
                this.SetPage(this.pageIndex + 1);
            }
        });
        const exitContainer = this.AddRootDiv(this.container, 'tutorial-exit-container');
        this.exitButton = this.AddButton(exitContainer, 'exit-button', 'Skip Tutorial', () => { });
        this.SetPage(0);
    }
    SetPage(index) {
        this.pageIndex = index;
        this.pageNumberDiv.innerText = `${this.pageIndex + 1}/${PAGE_COUNT}`;
        this.tutorialText.innerText = TUTORIAL_TEXT[this.pageIndex];
        this.tutorialImage.src = ImageSrc(this.pageIndex);
        this.prevButton.disabled = this.pageIndex === 0;
        this.nextButton.disabled = this.pageIndex === PAGE_COUNT - 1;
        if (this.pageIndex === PAGE_COUNT - 1) {
            switch (this.state) {
                case State.JoinLobby:
                    this.exitButton.innerText = 'Enter game';
                    break;
                case State.EnterMenu:
                    this.exitButton.innerText = 'Enter menu';
                    break;
            }
        }
    }
    SetExitCallback(callback, type) {
        this.state = type;
        this.exitButton.onclick = callback;
    }
}
function ImageSrc(index) {
    return `images/page${index}.png`;
}
const TUTORIAL_TEXT = [
    'In Passwordle, you are trying to guess their password...',
    'Before they guess your password.',
    "If a letter matches your opponent's password, it will turn green.",
    "If a letter is in your opponent's password, it will turn yellow.",
    "If a letter isn't in your opponent's password, it will turn grey.",
    'Guesses will be revealed simultanously...',
    'And will provide hints for you...',
    'And your opponent!',
    'If a letter matches your password, it will turn red!',
    'If every letter in your opponents passsword is green, you win!',
    'If every letter of your password is red, you lose!',
    "Find your opponent's password while trying to avoid your own!",
];
const PAGE_COUNT = TUTORIAL_TEXT.length;
//# sourceMappingURL=TutorialState.js.map