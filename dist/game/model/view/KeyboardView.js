"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyboardView = void 0;
const LetterState_1 = require("../../client/structs/LetterState");
const Animate_1 = require("./Animate");
const Subview_1 = require("./Subview");
const LetterView_1 = require("./word/letter/LetterView");
const KEYS = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['ENT', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'DEL'],
];
class KeyboardView extends Subview_1.Subview {
    constructor(base) {
        super(base, 'keyboard');
        this.keys = {};
    }
    Initialize(input) {
        KEYS.forEach(row => {
            const rowElement = this.AddDiv(this.root, 'keyboard-row');
            row.forEach(key => {
                key = key.toUpperCase();
                this.keys[key] = this.AddButton(rowElement, 'keyboard-key', key, () => input(key));
                if (key === 'ENT' || key === 'DEL') {
                    this.keys[key].classList.add('keyboard-command-key');
                }
            });
        });
    }
    SetColor(key, state) {
        key = key.toUpperCase();
        const color = ToColor(state);
        const element = this.keys[key];
        element.style.backgroundColor = color;
        switch (color) {
            default:
                break;
            case LetterView_1.LetterColor.Green:
            case LetterView_1.LetterColor.Yellow:
            case LetterView_1.LetterColor.Grey:
                (0, Animate_1.AnimateCSS)(element, Animate_1.AnimationType.Pulse, 0.5);
                break;
        }
    }
}
exports.KeyboardView = KeyboardView;
function ToColor(state) {
    switch (state) {
        case LetterState_1.LetterState.Correct:
            return LetterView_1.LetterColor.Green;
        case LetterState_1.LetterState.NoKnowledge:
            return LetterView_1.LetterColor.LightGrey;
        case LetterState_1.LetterState.NotInWord:
            return LetterView_1.LetterColor.Grey;
        case LetterState_1.LetterState.WrongPosition:
            return LetterView_1.LetterColor.Yellow;
    }
}
//# sourceMappingURL=KeyboardView.js.map