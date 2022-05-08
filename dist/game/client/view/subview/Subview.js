"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExplanationView = exports.Subview = void 0;
class Subview {
    constructor(base, rootClassName, explanationText = '') {
        this.elements = [];
        this.subviews = [];
        this.root = this.AddDiv(base, rootClassName);
        if (explanationText !== '') {
            this.AddExplanation(base, explanationText);
        }
    }
    Exit() {
        this.subviews.forEach(subview => subview.Exit());
        this.elements.forEach(element => element.remove());
    }
    AddSubview(subview) {
        this.subviews.push(subview);
    }
    AddDiv(parent, className) {
        const div = document.createElement('div');
        div.className = className;
        parent.appendChild(div);
        this.elements.push(div);
        return div;
    }
    AddExplanation(base, text) {
        const explanation = this.AddDiv(base, 'explanation');
        explanation.innerText = text;
    }
}
exports.Subview = Subview;
class ExplanationView {
    constructor(base, text = '') {
        this.root = this.AddDiv(base, 'explanation');
        this.root.innerText = text;
    }
    AddDiv(parent, className) {
        const div = document.createElement('div');
        div.className = className;
        parent.appendChild(div);
        return div;
    }
}
exports.ExplanationView = ExplanationView;
//# sourceMappingURL=Subview.js.map