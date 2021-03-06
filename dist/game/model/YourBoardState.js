"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YourBoardState = void 0;
const CharUpdate_1 = require("./CharUpdate");
const Word_1 = require("../../structs/Word");
const Words_1 = require("../Words");
const Updates_1 = require("../network/Updates");
const Animation_1 = require("./view/struct/Animation");
const ModelState_1 = require("./ModelState");
var State;
(function (State) {
    State[State["CanSubmit"] = 0] = "CanSubmit";
    State[State["Locked"] = 1] = "Locked";
})(State || (State = {}));
class YourBoardState extends ModelState_1.ModelState {
    constructor() {
        super(...arguments);
        this.guesses = [];
        this.currentGuess = '';
        this.state = State.CanSubmit;
    }
    Reset() {
        super.Reset();
        this.guesses = [];
        this.currentGuess = '';
        this.state = State.CanSubmit;
    }
    CanAddChar() {
        if (this.state !== State.CanSubmit) {
            return false;
        }
        if (this.currentGuess.length === 5) {
            return false;
        }
        return true;
    }
    CanDelete() {
        if (this.state !== State.CanSubmit) {
            return false;
        }
        if (this.currentGuess.length === 0) {
            return false;
        }
        return true;
    }
    CanSubmit() {
        var _a, _b;
        if (this.state !== State.CanSubmit) {
            return false;
        }
        if (this.currentGuess.length !== 5) {
            (_a = this.view) === null || _a === void 0 ? void 0 : _a.SubmitError(new Updates_1.LockedGuessError(Updates_1.ErrorType.TooShort, this.guesses.length, this.currentGuess.length));
            return false;
        }
        const guess = (0, Word_1.ToWord)(this.currentGuess);
        if (!(0, Words_1.IsValidWord)(guess)) {
            (_b = this.view) === null || _b === void 0 ? void 0 : _b.SubmitError(new Updates_1.LockedGuessError(Updates_1.ErrorType.NotValidWord, this.guesses.length, this.currentGuess.length));
            return false;
        }
        return true;
    }
    AddChar(char) {
        var _a, _b;
        if (this.state !== State.CanSubmit) {
            return false;
        }
        if (this.currentGuess.length === 5) {
            return false;
        }
        const update = new CharUpdate_1.CharUpdate(char, this.guesses.length, this.currentGuess.length);
        this.currentGuess += char;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.CharUpdate(update);
        if (this.currentGuess.length === 5) {
            const guess = (0, Word_1.ToWord)(this.currentGuess);
            if (!(0, Words_1.IsValidWord)(guess)) {
                (_b = this.view) === null || _b === void 0 ? void 0 : _b.SubmitError(new Updates_1.LockedGuessError(Updates_1.ErrorType.NotValidWord, this.guesses.length, this.currentGuess.length));
            }
        }
        return true;
    }
    Delete() {
        var _a;
        if (this.state !== State.CanSubmit) {
            return false;
        }
        if (this.currentGuess.length === 0) {
            return false;
        }
        this.currentGuess = this.currentGuess.slice(0, -1);
        const update = new CharUpdate_1.CharUpdate('', this.guesses.length, this.currentGuess.length);
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.CharUpdate(update);
        return true;
    }
    LockedGuess(opponentSubmitted) {
        var _a;
        this.state = State.Locked;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.GuessLocked(new Updates_1.GuessLocked(this.guesses.length), opponentSubmitted);
        return (0, Word_1.ToWord)(this.currentGuess);
    }
    Update(knowledge) {
        this.guesses.push((0, Word_1.ToWord)(this.currentGuess));
        const animations = [];
        for (let i = 0; i < knowledge.guess.length; i++) {
            animations.push(new Animation_1.LetterAnimation(i, () => {
                var _a;
                return (_a = this.view) === null || _a === void 0 ? void 0 : _a.SetCharKnowledge(this.guesses.length - 1, i, knowledge.guess[i], knowledge.letterKnowledge[i]);
            }));
        }
        this.currentGuess = '';
        this.state = State.CanSubmit;
        return animations;
    }
    CurrentGuessLength() {
        return this.currentGuess.length;
    }
    GuessCount() {
        return this.guesses.length;
    }
    LatestGuess() {
        return this.guesses[-1];
    }
}
exports.YourBoardState = YourBoardState;
//# sourceMappingURL=YourBoardState.js.map