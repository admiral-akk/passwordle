"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WordKnowledge = exports.LetterState = void 0;
var LetterState;
(function (LetterState) {
    LetterState[LetterState["None"] = 0] = "None";
    LetterState[LetterState["Grey"] = 1] = "Grey";
    LetterState[LetterState["Yellow"] = 2] = "Yellow";
    LetterState[LetterState["Green"] = 3] = "Green";
})(LetterState = exports.LetterState || (exports.LetterState = {}));
class WordKnowledge {
    constructor(letterKnowledge, guess) {
        this.letterKnowledge = letterKnowledge;
        this.guess = guess;
    }
}
exports.WordKnowledge = WordKnowledge;
//# sourceMappingURL=Knowledge.js.map