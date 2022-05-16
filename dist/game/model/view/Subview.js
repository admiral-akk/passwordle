"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subview = void 0;
class Subview {
    constructor(base, rootClassName, explanationText = '', longFormExplanationText = '') {
        this.elements = [];
        this.subviews = [];
        if (explanationText !== '') {
            this.AddExplanation(base, explanationText);
        }
        this.root = this.AddDiv(base, rootClassName);
        if (longFormExplanationText !== '') {
            this.root.classList.add('explain-hover');
            this.AddLongExplanation(base, longFormExplanationText);
        }
    }
    Reset() {
        this.subviews.forEach(subview => subview.Reset());
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
    AddSpan(parent, className, dataIcon) {
        const span = document.createElement('span');
        span.className = className;
        if (dataIcon) {
            span.setAttribute('data-icon', dataIcon);
        }
        parent.appendChild(span);
        this.elements.push(span);
        return span;
    }
    AddButton(parent, className, text, callback) {
        const button = document.createElement('button');
        button.className = className;
        button.innerText = text;
        button.onclick = callback;
        parent.appendChild(button);
        this.elements.push(button);
        return button;
    }
    AddExplanation(base, text) {
        const explanation = this.AddDiv(base, 'explanation');
        explanation.innerText = text;
    }
    AddLongExplanation(base, text) {
        const explanation = this.AddDiv(base, 'long-explanation');
        explanation.innerText = text;
    }
}
exports.Subview = Subview;
//# sourceMappingURL=Subview.js.map