"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerView = void 0;
const LetterState_1 = require("../../structs/LetterState");
const Subview_1 = require("./Subview");
const WordView_1 = require("./word/WordView");
class AnswerView extends Subview_1.Subview {
    constructor(base) {
        super(base, 'answer', 'Lose if this is filled!');
        this.answer = new WordView_1.WordView(this.root);
    }
    SetSecret(secret) {
        this.answer.Set(secret);
    }
    HintUpdate(update) {
        const knownCharacters = update.hint.playerProgress.knownCharacters;
        for (let i = 0; i < knownCharacters.length; i++) {
            if (knownCharacters[i] !== '') {
                this.answer.SetChar(knownCharacters[i], i, LetterState_1.LetterState.Red);
            }
        }
    }
}
exports.AnswerView = AnswerView;
//# sourceMappingURL=AnswerView.js.map