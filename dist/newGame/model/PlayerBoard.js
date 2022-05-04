"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerBoard = void 0;
const CharUpdate_1 = require("../../game/client/view/CharUpdate");
const Updates_1 = require("../network/updates/Updates");
var State;
(function (State) {
    State[State["None"] = 0] = "None";
    State[State["WaitingForKnowledge"] = 1] = "WaitingForKnowledge";
    State[State["CanSubmit"] = 2] = "CanSubmit";
})(State || (State = {}));
class PlayerBoard {
    constructor(view = null) {
        this.view = view;
        this.state = State.None;
        this.guesses = [];
        this.currentGuess = '';
    }
    AddChar(char) {
        var _a;
        const update = new CharUpdate_1.CharUpdate(char, this.guesses.length, this.currentGuess.length);
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.CharUpdate(update);
        return new Updates_1.AddedChar(char);
    }
    OpponentAddedChar() { }
    Ready() {
        this.state = State.WaitingForKnowledge;
    }
    IsReady() {
        return this.state === State.WaitingForKnowledge;
    }
    UpdatedAnswerKnowledge(update) {
        var _a;
        this.state = State.CanSubmit;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.SetSecret(update.playerWord);
    }
}
exports.PlayerBoard = PlayerBoard;
//# sourceMappingURL=PlayerBoard.js.map