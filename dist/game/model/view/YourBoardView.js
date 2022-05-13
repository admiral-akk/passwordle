"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YourBoardView = void 0;
const LetterState_1 = require("../../../structs/LetterState");
const Subview_1 = require("./Subview");
const LetterView_1 = require("./word/letter/LetterView");
const WordView_1 = require("./word/WordView");
class YourBoardView extends Subview_1.Subview {
    constructor(base) {
        super(base, 'board', 'Your Guesses');
        this.words = [];
        for (let i = 0; i < 6; i++) {
            const word = new PlayerWordView(this.root);
            this.words.push(word);
            this.AddSubview(word);
        }
    }
    SetCharKnowledge(wordIndex, charIndex, char, knowledge) {
        this.words[wordIndex].SetKnowledge(charIndex, char, knowledge);
    }
    CharUpdate(update) {
        this.words[update.wordIndex].AddChar(update.char, update.charIndex);
    }
    SubmitError(error) {
        this.words[error.wordIndex].LockedGuessError(error);
    }
    GuessLocked(update) {
        this.words[update.index].GuessLocked();
    }
}
exports.YourBoardView = YourBoardView;
class PlayerWordView extends WordView_1.BaseWordView {
    AddChar(char, index) {
        this.letters[index].SetChar(char);
    }
    SetKnowledge(charIndex, char, knowledge) {
        const letter = this.letters[charIndex];
        letter.SetChar(char);
        switch (knowledge) {
            case LetterState_1.LetterState.NoKnowledge:
                letter.SetColor(LetterView_1.LetterColor.White);
                break;
            case LetterState_1.LetterState.NotInWord:
                letter.SetColor(LetterView_1.LetterColor.Grey);
                break;
            case LetterState_1.LetterState.Correct:
                letter.SetColor(LetterView_1.LetterColor.Green);
                break;
            case LetterState_1.LetterState.WrongPosition:
                letter.SetColor(LetterView_1.LetterColor.Yellow);
                break;
        }
    }
    GuessLocked() {
        this.letters.forEach(letter => {
            letter.SetColor(LetterView_1.LetterColor.LightGrey);
        });
    }
}
//# sourceMappingURL=YourBoardView.js.map