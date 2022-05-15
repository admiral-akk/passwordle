"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpponentBoardState = void 0;
const OpponentUpdate_1 = require("./OpponentUpdate");
const Word_1 = require("../../structs/Word");
const Animation_1 = require("./view/struct/Animation");
const ModelState_1 = require("./ModelState");
var State;
(function (State) {
    State[State["Guessing"] = 0] = "Guessing";
    State[State["Waiting"] = 1] = "Waiting";
})(State || (State = {}));
class OpponentBoardState extends ModelState_1.ModelState {
    constructor() {
        super(...arguments);
        this.guesses = [];
        this.opponentCharCount = 0;
        this.state = State.Guessing;
    }
    Reset() {
        super.Reset();
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
        this.state = State.Waiting;
        this.opponentCharCount = 0;
        const update = new OpponentUpdate_1.OpponentUpdate(OpponentUpdate_1.OpponentUpdateType.Submit, this.guesses.length, this.opponentCharCount);
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.OpponentUpdate(update);
    }
    Submitted() {
        return this.state === State.Waiting;
    }
    Update(knowledge) {
        this.state = State.Guessing;
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