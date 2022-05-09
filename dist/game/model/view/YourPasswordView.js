"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YourPasswordView = void 0;
const Subview_1 = require("./Subview");
const LetterView_1 = require("./word/letter/LetterView");
const WordView_1 = require("./word/WordView");
class YourPasswordView extends Subview_1.Subview {
    constructor() {
        const base = document.getElementById('answer');
        super(base, 'answer', 'Your Password');
        this.answer = new AnswerWordView(this.root);
        this.AddSubview(this.answer);
    }
    SetSecret(secret) {
        this.answer.SetSecret(secret);
    }
    Reset() {
        this.answer.Reset();
    }
    Update(target) {
        for (let i = 0; i < target.knownCharacters.length; i++) {
            if (target.knownCharacters[i] === '') {
                continue;
            }
            const x = this.answer.UpdateProgress(i);
            if (x) {
                x();
            }
        }
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
exports.YourPasswordView = YourPasswordView;
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
//# sourceMappingURL=YourPasswordView.js.map