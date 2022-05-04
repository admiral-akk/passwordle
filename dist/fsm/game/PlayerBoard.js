"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerBoard = void 0;
const Word_1 = require("../../game/structs/Word");
const AddCharError_1 = require("./update/AddCharError");
const AddCharUpdate_1 = require("./update/AddCharUpdate");
const DeleteError_1 = require("./update/DeleteError");
const DeleteUpdate_1 = require("./update/DeleteUpdate");
const SubmitError_1 = require("./update/SubmitError");
const SubmitUpdate_1 = require("./update/SubmitUpdate");
var State;
(function (State) {
    State[State["CanInput"] = 0] = "CanInput";
    State[State["WaitingForOpponent"] = 1] = "WaitingForOpponent";
})(State || (State = {}));
const WORD_LENGTH = 5;
class PlayerBoard {
    constructor() {
        this.guesses = [];
        this.state = State.CanInput;
        this.currentGuess = '';
    }
    AddChar(char) {
        if (this.state !== State.CanInput) {
            return new AddCharError_1.AddCharError();
        }
        if (this.currentGuess.length >= WORD_LENGTH) {
            return new AddCharError_1.AddCharError();
        }
        this.currentGuess += char;
        return new AddCharUpdate_1.AddCharUpdate(char, this.currentGuess.length - 1);
    }
    Submit() {
        if (this.state !== State.CanInput) {
            return new SubmitError_1.SubmitError();
        }
        if (this.currentGuess.length !== WORD_LENGTH) {
            return new SubmitError_1.SubmitError();
        }
        // TODO: FIXME, check if word is in dictionary.
        this.state = State.WaitingForOpponent;
        this.guesses.push((0, Word_1.ToWord)(this.currentGuess));
        this.currentGuess = '';
        return new SubmitUpdate_1.SubmitUpdate(this.guesses[-1]);
    }
    Delete() {
        if (this.state !== State.CanInput) {
            return new DeleteError_1.DeleteError();
        }
        if (this.currentGuess.length === 0) {
            return new DeleteError_1.DeleteError();
        }
        this.currentGuess = this.currentGuess.slice(0, -1);
        return new DeleteUpdate_1.DeleteUpdate(this.currentGuess.length);
    }
    EnableInput() {
        this.state = State.CanInput;
    }
}
exports.PlayerBoard = PlayerBoard;
//# sourceMappingURL=PlayerBoard.js.map