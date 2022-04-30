"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExplanationView = void 0;
const Subview_1 = require("./Subview");
class ExplanationView extends Subview_1.Subview {
    constructor(base, text = '') {
        super(base, 'explanation');
        this.root.innerText = text;
    }
}
exports.ExplanationView = ExplanationView;
//# sourceMappingURL=ExplanationView.js.map