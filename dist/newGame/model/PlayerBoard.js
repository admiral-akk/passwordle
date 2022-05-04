"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerBoard = void 0;
const CharUpdate_1 = require("../../game/client/view/CharUpdate");
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
    AddChar(char) {
        if (this.state !== State.CanSubmit) {
            return null;
        }
        if (this.currentGuess.length === 5) {
            return null;
        }
        this.AddedChar(new Updates_1.AddedChar(char));
        return new Updates_1.AddedChar(char);
    }
    Delete() {
        if (this.state !== State.CanSubmit) {
            return null;
        }
        if (this.currentGuess.length === 0) {
            return null;
        }
        this.Deleted();
        return new Updates_1.Deleted();
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