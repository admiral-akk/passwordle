"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YourBoardState = void 0;
const Word_1 = require("../structs/Word");
const Words_1 = require("../Words");
const BoardState_1 = require("../model/BoardState");
var State;
(function (State) {
    State[State["CanSubmit"] = 0] = "CanSubmit";
    State[State["Locked"] = 1] = "Locked";
})(State || (State = {}));
class YourBoardState extends BoardState_1.BoardState {
    constructor() {
        super(...arguments);
        this.guesses = [];
        this.currentGuess = '';
        this.state = State.Locked;
        this.view = new YourBoardView();
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
        this.currentGuess += char;
        this.view.AddChar(char);
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
        if (this.state !== State.CanSubmit) {
            return;
        }
        if (this.currentGuess.length === 0) {
            return;
        }
        this.currentGuess = this.currentGuess.slice(0, -1);
        this.view.Delete();
    }
    AttemptLockedGuess() {
        if (this.state !== State.CanSubmit) {
            return false;
        }
        console.log('');
        if (this.currentGuess.length !== 5) {
            this.view.GuessTooShort();
            return false;
        }
        const guess = (0, Word_1.ToWord)(this.currentGuess);
        if (!(0, Words_1.IsValidWord)(guess)) {
            this.view.GuessNotValid();
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