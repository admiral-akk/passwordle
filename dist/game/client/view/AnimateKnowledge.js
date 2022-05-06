"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimateHint = void 0;
function AnimateHint(update, charIndex, playerBoard, opponentBoard, answer, target) {
    if (charIndex >= 10) {
        return;
    }
    let animations = GenerateAnimations(playerBoard, update.hint.playerGuess, update.guessIndex, answer, target, update.hint.playerProgress, update.hint.opponentProgress);
    animations = animations.concat(GenerateAnimations(opponentBoard, update.hint.opponentGuess, update.guessIndex, answer, target, update.hint.playerProgress, update.hint.opponentProgress));
    let promise = Promise.resolve();
    animations.forEach(animation => {
        if (animation) {
            promise = promise.then(() => delay(500)).then(() => animation());
        }
    });
}
exports.AnimateHint = AnimateHint;
function GenerateAnimations(board, guess, wordIndex, answer, target, playerProgress, opponentProgress) {
    const animations = [];
    const targetAnimations = target.GetAnimations(guess.guess, opponentProgress);
    const answerAnimations = answer.GetAnimations(guess.guess, playerProgress);
    for (let i = 0; i < 5; i++) {
        animations.push(() => {
            board.SetCharKnowledge(wordIndex, i, guess.guess[i], guess.letterKnowledge[i]);
        });
        animations.push(answerAnimations[i]);
        animations.push(targetAnimations[i]);
    }
    return animations;
}
function delay(ms) {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms);
    });
}
//# sourceMappingURL=AnimateKnowledge.js.map