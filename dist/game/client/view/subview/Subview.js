"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExplanationView = exports.Subview = void 0;
class Subview {
    constructor(base, rootClassName, explanationText = '') {
        this.root = AddDiv(base, rootClassName);
        if (explanationText !== '') {
            new ExplanationView(this.root, explanationText);
        }
    }
}
exports.Subview = Subview;
class ExplanationView {
    constructor(base, text = '') {
        this.root = AddDiv(base, 'explanation');
        this.root.innerText = text;
    }
}
exports.ExplanationView = ExplanationView;
function AddDiv(parent, className) {
    const div = document.createElement('div');
    div.className = className;
    parent.appendChild(div);
    return div;
}
//# sourceMappingURL=Subview.js.map