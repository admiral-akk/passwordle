"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerView = void 0;
const Subview_1 = require("./Subview");
const WordView_1 = require("./word/WordView");
class AnswerView extends Subview_1.Subview {
    constructor(base) {
        super(base, 'answer');
        this.answer = new WordView_1.WordView(this.root);
    }
    SetSecret(secret) {
        this.answer.Set(secret);
    }
}
exports.AnswerView = AnswerView;
//# sourceMappingURL=AnswerView.js.map