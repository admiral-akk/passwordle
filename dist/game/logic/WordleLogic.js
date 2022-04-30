"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetKnowledge = void 0;
const WordKnowledge_1 = require("../client/structs/WordKnowledge");
const LetterState_1 = require("../client/structs/LetterState");
function GetKnowledge(guess, answer) {
    console.log(`testing: ${guess} v ${answer}`);
    const answer_state = [];
    for (let i = 0; i < guess.length; i++) {
        answer_state[i] = LetterState_1.LetterState.None;
        if (guess[i] === answer[i]) {
            answer_state[i] = LetterState_1.LetterState.Green;
        }
        if (!answer.includes(guess[i])) {
            answer_state[i] = LetterState_1.LetterState.Grey;
        }
    }
    for (let i = 0; i < guess.length; i++) {
        if (answer_state[i] !== LetterState_1.LetterState.None) {
            continue;
        }
        let matched = 0;
        for (let j = 0; j < guess.length; j++) {
            if (i === j) {
                continue;
            }
            if (answer_state[j] !== LetterState_1.LetterState.Green &&
                answer_state[j] !== LetterState_1.LetterState.Yellow) {
                continue;
            }
            if (guess[j] !== guess[i]) {
                continue;
            }
            matched++;
        }
        const charCount = (answer.match(new RegExp(guess[i], 'g')) || []).length;
        if (charCount > matched) {
            answer_state[i] = LetterState_1.LetterState.Yellow;
        }
        else {
            answer_state[i] = LetterState_1.LetterState.Grey;
        }
    }
    return new WordKnowledge_1.WordKnowledge(answer_state, guess);
}
exports.GetKnowledge = GetKnowledge;
//# sourceMappingURL=WordleLogic.js.map