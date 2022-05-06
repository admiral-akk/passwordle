"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerBoardView = void 0;
const LetterState_1 = require("../../structs/LetterState");
const Subview_1 = require("./Subview");
const LetterView_1 = require("./word/letter/LetterView");
const WordView_1 = require("./word/WordView");
class PlayerBoardView extends Subview_1.Subview {
    constructor(base, explanationText = '') {
        super(base, 'board', explanationText);
        this.words = [];
        for (let i = 0; i < 6; i++) {
            this.words.push(new PlayerWordView(this.root));
        }
    }
    Reset() {
        this.words.forEach(word => word.Reset());
    }
    SetCharKnowledge(wordIndex, charIndex, char, knowledge) {
        this.words[wordIndex].SetKnowledge(charIndex, char, knowledge);
    }
    CharUpdate(update) {
        this.words[update.wordIndex].AddChar(update.char, update.charIndex);
    }
}
exports.PlayerBoardView = PlayerBoardView;
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
}
//# sourceMappingURL=PlayerBoardView.js.map