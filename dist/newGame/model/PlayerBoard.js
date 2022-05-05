"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerBoard = void 0;
const Hint_1 = require("../../game/client/structs/Hint");
const TargetProgress_1 = require("../../game/client/structs/TargetProgress");
const CharUpdate_1 = require("../../game/client/view/CharUpdate");
const HintUpdate_1 = require("../../game/client/view/HintUpdate");
const Word_1 = require("../../game/structs/Word");
const Words_1 = require("../../game/Words");
const Updates_1 = require("../network/updates/Updates");
var State;
(function (State) {
    State[State["WaitingForKnowledge"] = 0] = "WaitingForKnowledge";
    State[State["CanSubmit"] = 1] = "CanSubmit";
    State[State["GameEnded"] = 2] = "GameEnded";
})(State || (State = {}));
class PlayerBoard {
    constructor(view = null) {
        this.view = view;
        this.state = State.WaitingForKnowledge;
        this.guesses = [];
        this.currentGuess = '';
        this.secret = null;
    }
    OpponentLockedGuess() { }
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
    LockedGuess(update) {
        this.guesses.push(update.guess);
        this.currentGuess = '';
        this.state = State.WaitingForKnowledge;
    }
    AddCharCommand(char) {
        if (this.state !== State.CanSubmit) {
            return null;
        }
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
        return new Updates_1.LockedGuess(guess);
    }
    OpponentAddedChar() { }
    OpponentDeleted() { }
    UpdatedAnswerKnowledge(update) {
        var _a, _b, _c, _d;
        this.state = State.CanSubmit;
        const hint = new Hint_1.Hint(update.playerKnowledge, update.opponentKnowledge, update.playerProgress, update.opponentProgress);
        const hintUpdate = new HintUpdate_1.HintUpdate(hint, this.guesses.length - 1);
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.HintUpdate(hintUpdate);
        if (Gameover(update)) {
            this.state = State.GameEnded;
            if (Win(update)) {
                (_b = this.view) === null || _b === void 0 ? void 0 : _b.GameOver(true);
            }
            if (Loss(update)) {
                (_c = this.view) === null || _c === void 0 ? void 0 : _c.GameOver(false);
            }
            if (Tie(update)) {
                (_d = this.view) === null || _d === void 0 ? void 0 : _d.GameOver(false);
            }
        }
    }
    SetSecret(secret) {
        var _a;
        this.secret = secret;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.SetSecret(secret);
        this.state = State.CanSubmit;
    }
}
exports.PlayerBoard = PlayerBoard;
function Gameover(update) {
    return (0, TargetProgress_1.Complete)(update.playerProgress) || (0, TargetProgress_1.Complete)(update.opponentProgress);
}
function Tie(update) {
    return (0, TargetProgress_1.Complete)(update.playerProgress) && (0, TargetProgress_1.Complete)(update.opponentProgress);
}
function Win(update) {
    return !Tie(update) && (0, TargetProgress_1.Complete)(update.playerProgress);
}
function Loss(update) {
    return !Tie(update) && (0, TargetProgress_1.Complete)(update.opponentProgress);
}
//# sourceMappingURL=PlayerBoard.js.map