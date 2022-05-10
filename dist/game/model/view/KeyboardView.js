"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyboardView = void 0;
const Subview_1 = require("./Subview");
const KEYS = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['ENTER', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'DEL'],
];
class KeyboardView extends Subview_1.Subview {
    constructor() {
        const base = document.getElementById('keyboard');
        super(base, 'keyboard');
    }
    Initialize(input) {
        KEYS.forEach(row => {
            const rowElement = this.AddDiv(this.root, 'keyboard-row');
            row.forEach(key => {
                this.AddButton(rowElement, 'keyboard-key', key, () => input(key));
            });
        });
    }
    Reset() { }
}
exports.KeyboardView = KeyboardView;
//# sourceMappingURL=KeyboardView.js.map