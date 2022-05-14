"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LetterView = exports.LetterColor = void 0;
const Animate_1 = require("../../Animate");
const Subview_1 = require("../../Subview");
var LetterColor;
(function (LetterColor) {
    LetterColor["White"] = "white";
    LetterColor["Yellow"] = "#c9b458";
    LetterColor["Green"] = "#2e7d32";
    LetterColor["Grey"] = "grey";
    LetterColor["LightGrey"] = "lightgrey";
    LetterColor["Red"] = "crimson";
})(LetterColor = exports.LetterColor || (exports.LetterColor = {}));
class LetterView extends Subview_1.Subview {
    constructor(base) {
        super(base, 'letter');
        this.color = LetterColor.White;
    }
    Error() {
        (0, Animate_1.AnimateCSS)(this.root, Animate_1.AnimationType.ShakeY);
    }
    SetChar(char) {
        this.root.innerText = char;
    }
    ClearChar() {
        this.root.innerText = '';
    }
    Color() {
        return this.color;
    }
    SetColor(color) {
        this.root.style.backgroundColor = color;
        this.color = color;
        switch (color) {
            default:
                break;
            case LetterColor.Green:
            case LetterColor.Yellow:
                (0, Animate_1.AnimateCSS)(this.root, Animate_1.AnimationType.FlipInX, 0.5);
                break;
            case LetterColor.Red:
                (0, Animate_1.AnimateCSS)(this.root, Animate_1.AnimationType.HeartBeat, 0.5);
                break;
            case LetterColor.LightGrey:
                (0, Animate_1.AnimateCSS)(this.root, Animate_1.AnimationType.BounceIn, 0.5);
                break;
        }
        switch (color) {
            case LetterColor.Green:
            case LetterColor.LightGrey:
            case LetterColor.Red:
            case LetterColor.Yellow:
            case LetterColor.Grey:
                this.root.style.borderColor = color;
                break;
            case LetterColor.White:
                this.root.style.borderColor = LetterColor.Grey;
                break;
        }
    }
    Reset() {
        this.ClearChar();
        this.SetColor(LetterColor.White);
    }
}
exports.LetterView = LetterView;
//# sourceMappingURL=LetterView.js.map