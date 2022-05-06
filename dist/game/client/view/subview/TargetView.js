"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TargetView = void 0;
const Subview_1 = require("./Subview");
const LetterView_1 = require("./word/letter/LetterView");
const WordView_1 = require("./word/WordView");
class TargetView extends Subview_1.Subview {
    constructor(base) {
        super(base, 'target', 'Fill this word to win!');
        this.answer = new TargetWordView(this.root);
    }
    UpdateProgress(progress) {
        const knownCharacters = progress.knownCharacters;
        for (let i = 0; i < knownCharacters.length; i++) {
            if (knownCharacters[i] !== '') {
                this.answer.UpdateProgress(i, knownCharacters[i]);
            }
        }
    }
    Reset() {
        this.answer.Reset();
    }
}
exports.TargetView = TargetView;
class TargetWordView extends WordView_1.BaseWordView {
    UpdateProgress(charIndex, char) {
        const letter = this.letters[charIndex];
        letter.SetChar(char);
        letter.SetColor(LetterView_1.LetterColor.Green);
    }
}
//# sourceMappingURL=TargetView.js.map