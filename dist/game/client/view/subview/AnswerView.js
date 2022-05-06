"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerView = void 0;
const Subview_1 = require("./Subview");
const LetterView_1 = require("./word/letter/LetterView");
const WordView_1 = require("./word/WordView");
class AnswerView extends Subview_1.Subview {
    constructor(base) {
        super(base, 'answer', 'Lose if this is filled!');
        this.answer = new AnswerWordView(this.root);
    }
    SetSecret(secret) {
        this.answer.SetSecret(secret);
    }
    Reset() {
        this.answer.Reset();
    }
    UpdateProgress(progress) {
        const knownCharacters = progress.knownCharacters;
        for (let i = 0; i < knownCharacters.length; i++) {
            if (knownCharacters[i] !== '') {
                this.answer.UpdateProgress(i);
            }
        }
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
        this.letters[charIndex].SetColor(LetterView_1.LetterColor.Red);
    }
}
//# sourceMappingURL=AnswerView.js.map