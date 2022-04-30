"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TargetProgress = void 0;
const LetterState_1 = require("./LetterState");
class TargetProgress {
    constructor(knownCharacters) {
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
//# sourceMappingURL=TargetProgress.js.map