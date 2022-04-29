"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LetterView = void 0;
const Subview_1 = require("../Subview");
class LetterView extends Subview_1.Subview {
    constructor(base) {
        super(base, 'letter');
    }
    Update(update) {
        this.root.innerText = update.char;
    }
    Set(char) {
        this.root.innerText = char;
    }
}
exports.LetterView = LetterView;
//# sourceMappingURL=LetterView.js.map