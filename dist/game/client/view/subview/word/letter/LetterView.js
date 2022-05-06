"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LetterView = exports.LetterColor = void 0;
const Animate_1 = require("../../../Animate");
const Subview_1 = require("../../Subview");
var LetterColor;
(function (LetterColor) {
    LetterColor["White"] = "white";
    LetterColor["Yellow"] = "yellow";
    LetterColor["Green"] = "forestgreen";
    LetterColor["Grey"] = "grey";
    LetterColor["LightGrey"] = "lightgrey";
    LetterColor["Red"] = "crimson";
})(LetterColor = exports.LetterColor || (exports.LetterColor = {}));
class LetterView extends Subview_1.Subview {
    constructor(base) {
        super(base, 'letter');
    }
    SetChar(char) {
        this.root.innerText = char;
    }
    ClearChar() {
        this.root.innerText = '';
    }
    SetColor(color) {
        console.log(`setting color: ${color}`);
        this.root.style.backgroundColor = color;
        if (color !== LetterColor.White && color !== LetterColor.Grey) {
            (0, Animate_1.AnimateCSS)(this.root, Animate_1.AnimationType.Pulse);
        }
    }
    Reset() {
        this.ClearChar();
        this.SetColor(LetterColor.White);
    }
}
exports.LetterView = LetterView;
//# sourceMappingURL=LetterView.js.map