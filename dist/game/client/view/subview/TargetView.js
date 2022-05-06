"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TargetView = void 0;
const Subview_1 = require("./Subview");
const LetterView_1 = require("./word/letter/LetterView");
const WordView_1 = require("./word/WordView");
class TargetView extends Subview_1.Subview {
    constructor(base) {
        super(base, 'target', 'Win if this is all green!');
        this.answer = new TargetWordView(this.root);
    }
    UpdateProgress(charIndex, char) {
        this.answer.UpdateProgress(charIndex, char);
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