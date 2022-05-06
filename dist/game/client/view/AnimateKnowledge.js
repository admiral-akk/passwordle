"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimateHint = void 0;
function AnimateHint(update, yourBoard, opponentBoard, yourPassword, opponentPassword) {
    let animations = GenerateAnimations(yourBoard, update.hint.playerGuess, update.guessIndex, yourPassword, opponentPassword, update.hint.playerProgress, update.hint.opponentProgress);
    animations = animations.concat(GenerateAnimations(opponentBoard, update.hint.opponentGuess, update.guessIndex, yourPassword, opponentPassword, update.hint.playerProgress, update.hint.opponentProgress));
    let promise = Promise.resolve();
    animations.forEach(animation => {
        if (animation) {
            promise = promise.then(() => delay(500)).then(() => animation());
        }
    });
}
exports.AnimateHint = AnimateHint;
function GenerateAnimations(board, guess, wordIndex, yourPassword, opponentPassword, playerProgress, opponentProgress) {
    const animations = [];
    const targetAnimations = opponentPassword.GetAnimations(guess.guess, opponentProgress);
    const answerAnimations = yourPassword.GetAnimations(guess.guess, playerProgress);
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