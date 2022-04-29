"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subview = void 0;
class Subview {
    constructor(base, rootClassName) {
        this.root = AddDiv(base, rootClassName);
    }
}
exports.Subview = Subview;
function AddDiv(parent, className) {
    const div = document.createElement('div');
    div.className = className;
    parent.appendChild(div);
    return div;
}
//# sourceMappingURL=Subview.js.map