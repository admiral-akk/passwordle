"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpponentBoardView = void 0;
const LetterState_1 = require("../../structs/LetterState");
const OpponentUpdate_1 = require("../OpponentUpdate");
const Subview_1 = require("./Subview");
const LetterView_1 = require("./word/letter/LetterView");
const WordView_1 = require("./word/WordView");
class OpponentBoardView extends Subview_1.Subview {
    constructor(base, explanationText = 'Opponent Guesses') {
        super(base, 'board', explanationText);
        this.words = [];
        for (let i = 0; i < 6; i++) {
            const word = new OpponentWordView(this.root);
            this.words.push(word);
            this.AddSubview(word);
        }
    }
    SetCharKnowledge(wordIndex, charIndex, char, knowledge) {
        this.words[wordIndex].SetKnowledge(charIndex, char, knowledge);
    }
    OpponentUpdate(update) {
        this.words[update.wordIndex].OpponentUpdate(update.type, update.charIndex);
    }
    Reset() {
        this.words.forEach(word => word.Reset());
    }
}
exports.OpponentBoardView = OpponentBoardView;
class OpponentWordView extends WordView_1.BaseWordView {
    OpponentUpdate(type, charIndex) {
        switch (type) {
            case OpponentUpdate_1.OpponentUpdateType.AddChar:
                this.letters[charIndex].SetColor(LetterView_1.LetterColor.LightGrey);
                break;
            case OpponentUpdate_1.OpponentUpdateType.Delete:
                this.letters[charIndex].SetColor(LetterView_1.LetterColor.White);
                break;
        }
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
//# sourceMappingURL=OpponentBoardView.js.map