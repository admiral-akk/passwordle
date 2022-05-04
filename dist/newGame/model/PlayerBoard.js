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
    }
    AddChar(char) {
        var _a;
        const update = new CharUpdate_1.CharUpdate(char, this.guesses.length, this.currentGuess.length);
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.CharUpdate(update);
        return new Updates_1.AddedChar(char);
    }
    OpponentAddedChar() { }
    UpdatedAnswerKnowledge(update) {
        var _a;
        this.state = State.CanSubmit;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.SetSecret(update.playerWord);
    }
}
exports.PlayerBoard = PlayerBoard;
//# sourceMappingURL=PlayerBoard.js.map