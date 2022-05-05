"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Complete = exports.TargetProgress = void 0;
const LetterState_1 = require("./LetterState");
class TargetProgress {
    constructor(knownCharacters = ['', '', '', '', '']) {
        this.knownCharacters = knownCharacters;
    }
    UpdateProgress(knowledge) {
        for (let i = 0; i < knowledge.guess.length; i++) {
            if (knowledge.letterKnowledge[i] === LetterState_1.LetterState.Green) {
                this.knownCharacters[i] = knowledge.guess[i];
            }
        }
    }
}
exports.TargetProgress = TargetProgress;
function Complete(progress) {
    const unfilled = progress.knownCharacters.filter(c => c === '').length;
    console.log(`progress unfilled: ${unfilled}`);
    return unfilled === 0;
}
exports.Complete = Complete;
//# sourceMappingURL=TargetProgress.js.map