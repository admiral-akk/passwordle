"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerView = void 0;
const Subview_1 = require("./Subview");
const LetterView_1 = require("./word/letter/LetterView");
const WordView_1 = require("./word/WordView");
class AnswerView extends Subview_1.Subview {
    constructor(base) {
        super(base, 'answer', 'Your Password');
        this.answer = new AnswerWordView(this.root);
    }
    SetSecret(secret) {
        this.answer.SetSecret(secret);
    }
    Reset() {
        this.answer.Reset();
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
            animations.push(this.answer.UpdateProgress(i));
        }
        return animations;
    }
}
exports.AnswerView = AnswerView;
class AnswerWordView extends WordView_1.BaseWordView {
    SetSecret(secret) {
        for (let i = 0; i < secret.length; i++) {
            this.letters[i].SetChar(secret[i]);
        }
    }
    UpdateProgress(charIndex) {
        const letter = this.letters[charIndex];
        if (letter.Color() !== LetterView_1.LetterColor.Red) {
            return () => {
                letter.SetColor(LetterView_1.LetterColor.Red);
            };
        }
        else {
            return null;
        }
    }
}
//# sourceMappingURL=AnswerView.js.map