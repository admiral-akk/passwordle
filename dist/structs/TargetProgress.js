"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Complete = exports.UpdateProgress = exports.TargetProgress = void 0;
const LetterState_1 = require("./LetterState");
class TargetProgress {
    constructor(knownCharacters = ['', '', '', '', '']) {
        this.knownCharacters = knownCharacters;
    }
}
exports.TargetProgress = TargetProgress;
function UpdateProgress(target, knowledge) {
    for (let i = 0; i < knowledge.guess.length; i++) {
        if (knowledge.letterKnowledge[i] === LetterState_1.LetterState.Correct) {
            target.knownCharacters[i] = knowledge.guess[i];
        }
    }
}
exports.UpdateProgress = UpdateProgress;
function Complete(target) {
    const unfilled = target.knownCharacters.filter(c => c === '').length;
    return unfilled === 0;
}
exports.Complete = Complete;
//# sourceMappingURL=TargetProgress.js.map