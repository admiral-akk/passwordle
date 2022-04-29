"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardView = void 0;
const Subview_1 = require("./Subview");
const WordView_1 = require("./word/WordView");
const WORD_COUNT = 6;
class BoardView extends Subview_1.Subview {
    constructor(base) {
        super(base, 'board');
        this.words = [];
        for (let i = 0; i < WORD_COUNT; i++) {
            this.words.push(new WordView_1.WordView(this.root));
        }
    }
    BaseUpdate(update) {
        this.words[update.wordIndex].Update(update);
    }
}
exports.BoardView = BoardView;
//# sourceMappingURL=BoardView.js.map