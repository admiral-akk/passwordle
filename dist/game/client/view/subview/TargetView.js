"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TargetView = void 0;
const Knowledge_1 = require("../../../logic/Knowledge");
const Subview_1 = require("./Subview");
const WordView_1 = require("./word/WordView");
class TargetView extends Subview_1.Subview {
    constructor(base) {
        super(base, 'target');
        this.answer = new WordView_1.WordView(this.root);
    }
    Update(guess, knowledge) {
        for (let i = 0; i < guess.length; i++) {
            if (knowledge[i] === Knowledge_1.LetterState.Green) {
                this.answer.SetChar(guess[i], i, Knowledge_1.LetterState.Green);
            }
        }
    }
    HintUpdate(update) {
        this.Update(update.opponentKnowledge.guess, update.opponentKnowledge.letterKnowledge);
        this.Update(update.playerKnowledge.guess, update.playerKnowledge.letterKnowledge);
    }
}
exports.TargetView = TargetView;
//# sourceMappingURL=TargetView.js.map