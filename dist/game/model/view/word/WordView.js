"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseWordView = void 0;
const LetterView_1 = require("./letter/LetterView");
const Subview_1 = require("../Subview");
const Updates_1 = require("../../../network/Updates");
const Animate_1 = require("../Animate");
const WORD_LENGTH = 5;
class BaseWordView extends Subview_1.Subview {
    constructor(root) {
        super(root, 'word');
        this.letters = [];
        for (let i = 0; i < WORD_LENGTH; i++) {
            const letter = new LetterView_1.LetterView(this.root);
            this.letters.push(letter);
            this.AddSubview(letter);
        }
    }
    LockedGuessError(error) {
        switch (error.type) {
            case Updates_1.ErrorType.NotValidWord:
                (0, Animate_1.AddPopup)(this.root, 'Not valid word!', -70, 'lightgray');
                this.letters.forEach(letter => letter.Error());
                break;
            case Updates_1.ErrorType.TooShort:
                break;
        }
    }
    WaitingForOpponent() {
        (0, Animate_1.AddPopup)(this.root, 'Submitted! Waiting for opponent.', -70, 'lightgray');
    }
}
exports.BaseWordView = BaseWordView;
//# sourceMappingURL=WordView.js.map