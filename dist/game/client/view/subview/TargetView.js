"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TargetView = void 0;
const LetterState_1 = require("../../structs/LetterState");
const Subview_1 = require("./Subview");
const WordView_1 = require("./word/WordView");
class TargetView extends Subview_1.Subview {
    constructor(base) {
        super(base, 'target');
        this.answer = new WordView_1.WordView(this.root);
    }
    HintUpdate(update) {
        const knownCharacters = update.hint.opponentProgress.knownCharacters;
        for (let i = 0; i < knownCharacters.length; i++) {
            if (knownCharacters[i] !== '') {
                this.answer.SetChar(knownCharacters[i], i, LetterState_1.LetterState.Green);
            }
        }
    }
}
exports.TargetView = TargetView;
//# sourceMappingURL=TargetView.js.map