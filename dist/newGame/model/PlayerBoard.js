"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerBoard = void 0;
const CharUpdate_1 = require("../../game/client/view/CharUpdate");
const Word_1 = require("../../game/structs/Word");
const Words_1 = require("../../game/Words");
const Updates_1 = require("../network/updates/Updates");
var State;
(function (State) {
    State[State["WaitingForKnowledge"] = 0] = "WaitingForKnowledge";
    State[State["CanSubmit"] = 1] = "CanSubmit";
})(State || (State = {}));
class PlayerBoard {
    constructor(view = null) {
        this.view = view;
        this.state = State.WaitingForKnowledge;
        this.guesses = [];
        this.currentGuess = '';
        this.secret = null;
    }
    OpponentSubmitted() { }
    AddedChar(update) {
        var _a;
        const viewUpdate = new CharUpdate_1.CharUpdate(update.char, this.guesses.length, this.currentGuess.length);
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.CharUpdate(viewUpdate);
        this.currentGuess += update.char;
    }
    Deleted() {
        var _a;
        this.currentGuess = this.currentGuess.slice(0, -1);
        const update = new CharUpdate_1.CharUpdate('', this.guesses.length, this.currentGuess.length);
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.CharUpdate(update);
    }
    Submitted(update) {
        this.guesses.push(update.guess);
        this.currentGuess = '';
        this.state = State.WaitingForKnowledge;
    }
    AddCharCommand(char) {
        console.log('can submit?');
        if (this.state !== State.CanSubmit) {
            return null;
        }
        console.log('word too long?');
        if (this.currentGuess.length === 5) {
            return null;
        }
        return new Updates_1.AddedChar(char);
    }
    DeleteCommand() {
        if (this.state !== State.CanSubmit) {
            return null;
        }
        if (this.currentGuess.length === 0) {
            return null;
        }
        return new Updates_1.Deleted();
    }
    SubmitCommand() {
        console.log('start submit command');
        console.log(`state: ${this.state}`);
        console.log(`word: ${this.currentGuess}`);
        console.log(`length: ${this.currentGuess.length}`);
        if (this.state !== State.CanSubmit) {
            return null;
        }
        console.log('');
        if (this.currentGuess.length !== 5) {
            return null;
        }
        console.log('start submit command');
        const guess = (0, Word_1.ToWord)(this.currentGuess);
        console.log(`is valid: ${(0, Words_1.IsValidWord)(guess)}`);
        if (!(0, Words_1.IsValidWord)(guess)) {
            return null;
        }
        console.log('start submit command');
        return new Updates_1.Submitted(guess);
    }
    OpponentAddedChar() { }
    OpponentDeleted() { }
    UpdatedAnswerKnowledge(update) {
        var _a;
        this.state = State.CanSubmit;
        this.secret = update.playerWord;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.SetSecret(update.playerWord);
    }
}
exports.PlayerBoard = PlayerBoard;
//# sourceMappingURL=PlayerBoard.js.map