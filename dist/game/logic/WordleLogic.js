"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetKnowledge = void 0;
const WordKnowledge_1 = require("../client/structs/WordKnowledge");
const LetterState_1 = require("../client/structs/LetterState");
function GetKnowledge(guess, answer) {
    const answer_state = [];
    for (let i = 0; i < guess.length; i++) {
        answer_state[i] = LetterState_1.LetterState.NoKnowledge;
        if (guess[i] === answer[i]) {
            answer_state[i] = LetterState_1.LetterState.Correct;
        }
        if (!answer.includes(guess[i])) {
            answer_state[i] = LetterState_1.LetterState.NotInWord;
        }
    }
    for (let i = 0; i < guess.length; i++) {
        if (answer_state[i] !== LetterState_1.LetterState.NoKnowledge) {
            continue;
        }
        let matched = 0;
        for (let j = 0; j < guess.length; j++) {
            if (i === j) {
                continue;
            }
            if (answer_state[j] !== LetterState_1.LetterState.Correct &&
                answer_state[j] !== LetterState_1.LetterState.WrongPosition) {
                continue;
            }
            if (guess[j] !== guess[i]) {
                continue;
            }
            matched++;
        }
        const charCount = (answer.match(new RegExp(guess[i], 'g')) || []).length;
        if (charCount > matched) {
            answer_state[i] = LetterState_1.LetterState.WrongPosition;
        }
        else {
            answer_state[i] = LetterState_1.LetterState.NotInWord;
        }
    }
    return new WordKnowledge_1.WordKnowledge(answer_state, guess);
}
exports.GetKnowledge = GetKnowledge;
//# sourceMappingURL=WordleLogic.js.map