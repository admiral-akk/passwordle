"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YourBoardState = void 0;
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
        this.state = State.Locked;
        this.view = null;
        if (hasView) {
            this.view = new YourBoardView();
        }
    }
    AttemptAddChar(char) {
        if (this.state !== State.CanSubmit) {
            return false;
        }
        if (this.currentGuess.length === 5) {
            return false;
        }
        return true;
    }
    AddChar(char) {
        var _a;
        this.currentGuess += char;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.AddChar(char);
    }
    AttemptDelete() {
        if (this.state !== State.CanSubmit) {
            return false;
        }
        if (this.currentGuess.length === 0) {
            return false;
        }
        return true;
    }
    Delete() {
        var _a;
        if (this.state !== State.CanSubmit) {
            return;
        }
        if (this.currentGuess.length === 0) {
            return;
        }
        this.currentGuess = this.currentGuess.slice(0, -1);
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.Delete();
    }
    AttemptLockedGuess() {
        var _a, _b;
        if (this.state !== State.CanSubmit) {
            return false;
        }
        console.log('');
        if (this.currentGuess.length !== 5) {
            (_a = this.view) === null || _a === void 0 ? void 0 : _a.GuessTooShort();
            return false;
        }
        const guess = (0, Word_1.ToWord)(this.currentGuess);
        if (!(0, Words_1.IsValidWord)(guess)) {
            (_b = this.view) === null || _b === void 0 ? void 0 : _b.GuessNotValid();
            return false;
        }
        return true;
    }
    LockedGuess() {
        this.state = State.Locked;
        return (0, Word_1.ToWord)(this.currentGuess);
    }
}
exports.YourBoardState = YourBoardState;
class YourBoardView {
    AddChar(char) { }
    Delete() { }
    GuessTooShort() { }
    GuessNotValid() { }
}
//# sourceMappingURL=YourBoardState.js.map