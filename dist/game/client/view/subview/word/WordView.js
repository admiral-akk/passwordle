"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WordView = void 0;
const LetterView_1 = require("./LetterView");
const Subview_1 = require("../Subview");
const WORD_LENGTH = 5;
class WordView extends Subview_1.Subview {
    constructor(root) {
        super(root, 'word');
        this.letters = [];
        for (let i = 0; i < WORD_LENGTH; i++) {
            this.letters.push(new LetterView_1.LetterView(this.root));
        }
    }
    Set(word) {
        for (let i = 0; i < WORD_LENGTH; i++) {
            this.letters[i].Set(word[i]);
        }
    }
}
exports.WordView = WordView;
//# sourceMappingURL=WordView.js.map