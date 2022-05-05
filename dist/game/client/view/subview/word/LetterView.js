"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LetterView = void 0;
const LetterState_1 = require("../../../structs/LetterState");
const Subview_1 = require("../Subview");
class LetterView extends Subview_1.Subview {
    constructor(base) {
        super(base, 'letter');
    }
    Update(update) {
        this.root.innerText = update.char;
    }
    Set(char) {
        this.root.innerText = char;
    }
    SetKnowledge(letterKnowledge) {
        console.log(`setting color: ${letterKnowledge}`);
        switch (letterKnowledge) {
            case LetterState_1.LetterState.None:
                this.root.style.backgroundColor = 'white';
                break;
            case LetterState_1.LetterState.Yellow:
                this.root.style.backgroundColor = 'yellow';
                break;
            case LetterState_1.LetterState.Green:
                this.root.style.backgroundColor = 'green';
                break;
            case LetterState_1.LetterState.Grey:
                this.root.style.backgroundColor = 'grey';
                break;
            case LetterState_1.LetterState.Red:
                this.root.style.backgroundColor = 'red';
                break;
        }
    }
    Reset() {
        this.Set('');
        this.SetKnowledge(LetterState_1.LetterState.None);
    }
}
exports.LetterView = LetterView;
//# sourceMappingURL=LetterView.js.map