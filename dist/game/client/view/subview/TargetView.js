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
    GetAnimations(guess, target) {
        const animations = [];
        for (let i = 0; i < target.knownCharacters.length; i++) {
            if (target.knownCharacters[i] === '') {
                animations.push(null);
                continue;
            }
            if (target.knownCharacters[i] !== guess[i]) {
                animations.push(null);
                continue;
            }
            animations.push(this.answer.UpdateProgress(i, target.knownCharacters[i]));
        }
        return animations;
    }
    Reset() {
        this.answer.Reset();
    }
}
exports.TargetView = TargetView;
class TargetWordView extends WordView_1.BaseWordView {
    UpdateProgress(charIndex, char) {
        const letter = this.letters[charIndex];
        if (letter.Color() !== LetterView_1.LetterColor.Green) {
            return () => {
                letter.SetChar(char);
                letter.SetColor(LetterView_1.LetterColor.Green);
            };
        }
        else {
            return null;
        }
    }
}
//# sourceMappingURL=TargetView.js.map