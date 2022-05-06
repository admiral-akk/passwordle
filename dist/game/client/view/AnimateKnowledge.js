"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimateHint = void 0;
const LetterState_1 = require("../structs/LetterState");
function AnimateHint(update, charIndex, playerBoard, opponentBoard, answer, target) {
    if (charIndex >= 10) {
        return;
    }
    const nextCharIndex = charIndex + 1;
    // goal
    const targetProgress = update.hint.opponentProgress;
    // opponent's goal
    const playerProgress = update.hint.playerProgress;
    let knowledge;
    let board;
    if (charIndex > 4) {
        // opponent
        knowledge = update.hint.opponentGuess;
        board = opponentBoard;
        charIndex -= 5;
    }
    else {
        knowledge = update.hint.playerGuess;
        board = playerBoard;
    }
    // Update the letter
    board.SetCharKnowledge(update.guessIndex, charIndex, knowledge.guess[charIndex], knowledge.letterKnowledge[charIndex]);
    let promise = Promise.resolve();
    if (knowledge.letterKnowledge[charIndex] === LetterState_1.LetterState.Correct) {
        promise = promise
            .then(() => delay(500))
            .then(() => target.UpdateProgress(charIndex, knowledge.guess[charIndex]));
    }
    if (knowledge.guess[charIndex] === playerProgress.knownCharacters[charIndex]) {
        promise = promise
            .then(() => delay(500))
            .then(() => answer.UpdateProgress(charIndex));
    }
    promise
        .then(() => delay(500))
        .then(() => AnimateHint(update, nextCharIndex, playerBoard, opponentBoard, answer, target));
}
exports.AnimateHint = AnimateHint;
function delay(ms) {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms);
    });
}
//# sourceMappingURL=AnimateKnowledge.js.map