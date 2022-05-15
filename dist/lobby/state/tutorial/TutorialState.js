"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TutorialState = void 0;
const LobbyState_1 = require("../LobbyState");
const Modal_1 = require("../Modal");
class TutorialState extends LobbyState_1.LobbyState {
    constructor() {
        super(...arguments);
        this.modal = new TutorialModal();
    }
    Enter() { }
    Exit() {
        return this.modal.Exit();
    }
    Register(socket) { }
    Deregister(socket) { }
}
exports.TutorialState = TutorialState;
class TutorialModal extends Modal_1.Modal {
    constructor() {
        super();
        this.pageIndex = 0;
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
        this.exitButton = this.AddButton(exitContainer, 'exit-button', 'Exit', () => { });
        this.SetPage(0);
    }
    SetPage(index) {
        this.pageIndex = index;
        this.pageNumberDiv.innerText = `${this.pageIndex + 1}/${PAGE_COUNT}`;
        this.tutorialText.innerText = TUTORIAL_TEXT[this.pageIndex];
        this.tutorialImage.src = ImageSrc(this.pageIndex);
    }
}
function ImageSrc(index) {
    return `images/page${index}.png`;
}
const TUTORIAL_TEXT = [
    'In Passwordle, you are trying to guess their password...',
    'Before they guess your password.',
    "If a guess matches a letter of your opponent's password in the correct position, the letter is revealed and it turns green.",
    "If a guess shares a letter with your opponent's password, but isn't in the correct place, it will turn yellow.",
    "If a letter isn't in your opponent's password, it will turn grey.",
    "You and your opponent's guess will be revealed at the same time...",
    'And will provide hints for you...',
    'And your opponent!',
    'If a guess matches the position of one of your letters, it will turn red!',
    'If every letter in your opponents passsword is revealed, you win!',
    'If every letter of your password is marked red, you lose!',
    "Try to guess your opponent's password while avoiding your own!",
];
const PAGE_COUNT = TUTORIAL_TEXT.length;
//# sourceMappingURL=TutorialState.js.map