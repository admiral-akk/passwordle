"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExplanationView = void 0;
const Subview_1 = require("./Subview");
class ExplanationView extends Subview_1.Subview {
    Reset() {
        throw new Error('Method not implemented.');
    }
    constructor(base, text = '') {
        super(base, 'explanation', text);
    }
}
exports.ExplanationView = ExplanationView;
//# sourceMappingURL=ExplanationView.js.map