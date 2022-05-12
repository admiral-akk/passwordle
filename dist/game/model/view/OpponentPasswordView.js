"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpponentPasswordView = void 0;
const Animation_1 = require("./struct/Animation");
const Subview_1 = require("./Subview");
const LetterView_1 = require("./word/letter/LetterView");
const WordView_1 = require("./word/WordView");
class OpponentPasswordView extends Subview_1.Subview {
    constructor(base) {
        super(base, 'target', "Opponent's Password", 'If these are all green, you win!');
        this.answer = new TargetWordView(this.root);
        this.AddSubview(this.answer);
    }
    Update(target, playerGuess) {
        const animations = [];
        for (let i = 0; i < target.knownCharacters.length; i++) {
            if (target.knownCharacters[i] === '') {
                continue;
            }
            const animation = this.answer.UpdateProgress(i, target.knownCharacters[i]);
            if (animation) {
                if (playerGuess[i] === target.knownCharacters[i]) {
                    animations.push(new Animation_1.LetterAnimation(i, animation));
                }
                else {
                    animations.push(new Animation_1.LetterAnimation(i + 5, animation));
                }
            }
        }
        return animations;
    }
    GetAnimations(guess, target) {
        const animations = [];
        for (let i = 0; i < target.knownCharacters.length; i++) {
            if (target.knownCharacters[i] === '') {
                animations.push(null);
                continue;
            }
            if (target.knownCharacters[i] !== guess[i]) {
                animations.push(null);
                continue;
            }
            animations.push(this.answer.UpdateProgress(i, target.knownCharacters[i]));
        }
        return animations;
    }
    Reset() {
        this.answer.Reset();
    }
}
exports.OpponentPasswordView = OpponentPasswordView;
class TargetWordView extends WordView_1.BaseWordView {
    UpdateProgress(charIndex, char) {
        const letter = this.letters[charIndex];
        if (letter.Color() !== LetterView_1.LetterColor.Green) {
            return () => {
                letter.SetChar(char);
                letter.SetColor(LetterView_1.LetterColor.Green);
            };
        }
        else {
            return null;
        }
    }
}
//# sourceMappingURL=OpponentPasswordView.js.map