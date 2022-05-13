"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpponentBoardState = void 0;
const OpponentUpdate_1 = require("./OpponentUpdate");
const Word_1 = require("../../structs/Word");
const Animation_1 = require("./view/struct/Animation");
const ModelState_1 = require("./ModelState");
class OpponentBoardState extends ModelState_1.ModelState {
    constructor() {
        super(...arguments);
        this.guesses = [];
        this.opponentCharCount = 0;
    }
    OpponentAddedChar() {
        var _a;
        const update = new OpponentUpdate_1.OpponentUpdate(OpponentUpdate_1.OpponentUpdateType.AddChar, this.guesses.length, this.opponentCharCount);
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.OpponentUpdate(update);
        this.opponentCharCount++;
    }
    OpponentDeleted() {
        var _a;
        this.opponentCharCount--;
        const update = new OpponentUpdate_1.OpponentUpdate(OpponentUpdate_1.OpponentUpdateType.Delete, this.guesses.length, this.opponentCharCount);
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.OpponentUpdate(update);
    }
    OpponentLockedGuess() {
        var _a;
        this.opponentCharCount = 0;
        const update = new OpponentUpdate_1.OpponentUpdate(OpponentUpdate_1.OpponentUpdateType.Submit, this.guesses.length, this.opponentCharCount);
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.OpponentUpdate(update);
    }
    Update(knowledge) {
        this.guesses.push((0, Word_1.ToWord)(knowledge.guess));
        const animations = [];
        for (let i = 0; i < knowledge.guess.length; i++) {
            animations.push(new Animation_1.LetterAnimation(i + 5, () => {
                var _a;
                return (_a = this.view) === null || _a === void 0 ? void 0 : _a.SetCharKnowledge(this.guesses.length - 1, i, knowledge.guess[i], knowledge.letterKnowledge[i]);
            }));
        }
        return animations;
    }
}
exports.OpponentBoardState = OpponentBoardState;
//# sourceMappingURL=OpponentBoardState.js.map