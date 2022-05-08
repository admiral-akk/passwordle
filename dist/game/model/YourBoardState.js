"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YourBoardState = void 0;
const CharUpdate_1 = require("../client/view/CharUpdate");
const YourBoardView_1 = require("../client/view/subview/YourBoardView");
const Word_1 = require("../structs/Word");
const Words_1 = require("../Words");
var State;
(function (State) {
    State[State["CanSubmit"] = 0] = "CanSubmit";
    State[State["Locked"] = 1] = "Locked";
})(State || (State = {}));
class YourBoardState {
    constructor(hasView) {
        this.guesses = [];
        this.currentGuess = '';
        this.state = State.CanSubmit;
        this.view = null;
        if (hasView) {
            this.view = new YourBoardView_1.YourBoardView();
        }
    }
    AddChar(char) {
        var _a;
        if (this.state !== State.CanSubmit) {
            return false;
        }
        if (this.currentGuess.length === 5) {
            return false;
        }
        const update = new CharUpdate_1.CharUpdate(char, this.guesses.length, this.currentGuess.length);
        this.currentGuess += char;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.CharUpdate(update);
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
    LockedGuess() {
        if (this.state !== State.CanSubmit) {
            return null;
        }
        console.log('');
        if (this.currentGuess.length !== 5) {
            return null;
        }
        const guess = (0, Word_1.ToWord)(this.currentGuess);
        if (!(0, Words_1.IsValidWord)(guess)) {
            return null;
        }
        this.state = State.Locked;
        return (0, Word_1.ToWord)(this.currentGuess);
    }
    Update(knowledge) {
        var _a;
        this.guesses.push((0, Word_1.ToWord)(knowledge.guess));
        for (let i = 0; i < knowledge.guess.length; i++) {
            (_a = this.view) === null || _a === void 0 ? void 0 : _a.SetCharKnowledge(this.guesses.length - 1, i, knowledge.guess[i], knowledge.letterKnowledge[i]);
        }
        this.currentGuess = '';
        this.state = State.CanSubmit;
    }
    Exit() {
        var _a;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.Exit();
    }
    Reset() {
        this.guesses = [];
        this.currentGuess = '';
        this.state = State.CanSubmit;
    }
}
exports.YourBoardState = YourBoardState;
//# sourceMappingURL=YourBoardState.js.map