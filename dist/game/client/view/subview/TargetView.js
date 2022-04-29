"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TargetView = void 0;
const Subview_1 = require("./Subview");
const WordView_1 = require("./word/WordView");
class TargetView extends Subview_1.Subview {
    constructor(base) {
        super(base, 'target');
        this.answer = new WordView_1.WordView(this.root);
    }
}
exports.TargetView = TargetView;
//# sourceMappingURL=TargetView.js.map