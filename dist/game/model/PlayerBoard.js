"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerBoard = void 0;
const Hint_1 = require("../client/structs/Hint");
const CharUpdate_1 = require("../client/view/CharUpdate");
const HintUpdate_1 = require("../client/view/HintUpdate");
const OpponentUpdate_1 = require("../client/view/OpponentUpdate");
const Word_1 = require("../structs/Word");
const Words_1 = require("../Words");
const Updates_1 = require("../network/updates/Updates");
const EndGameView_1 = require("../client/view/subview/EndGameView");
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
        this.opponentCharCount = 0;
        this.secret = null;
    }
    Exit() {
        var _a;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.Exit();
    }
    GuessCount() {
        if (this.state === State.WaitingForKnowledge) {
            return this.guesses.length - 1;
        }
        return this.guesses.length;
    }
    OpponentDisconnected() {
        this.state = State.GameEnded;
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
    IsGameOver() {
        return this.state === State.GameEnded;
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
        var _a, _b, _c;
        if (this.state !== State.CanSubmit) {
            (_a = this.view) === null || _a === void 0 ? void 0 : _a.LockedGuessError(new Updates_1.LockedGuessError(Updates_1.ErrorType.None, this.guesses.length, this.currentGuess.length));
            return null;
        }
        console.log('');
        if (this.currentGuess.length !== 5) {
            (_b = this.view) === null || _b === void 0 ? void 0 : _b.LockedGuessError(new Updates_1.LockedGuessError(Updates_1.ErrorType.TooShort, this.guesses.length, this.currentGuess.length));
            return null;
        }
        const guess = (0, Word_1.ToWord)(this.currentGuess);
        if (!(0, Words_1.IsValidWord)(guess)) {
            (_c = this.view) === null || _c === void 0 ? void 0 : _c.LockedGuessError(new Updates_1.LockedGuessError(Updates_1.ErrorType.NotValidWord, this.guesses.length, this.currentGuess.length));
            return null;
        }
        return new Updates_1.LockedGuess(guess);
    }
    OpponentAddedChar() {
        var _a;
        const update = new OpponentUpdate_1.OpponentUpdate(OpponentUpdate_1.OpponentUpdateType.AddChar, this.GuessCount(), this.opponentCharCount);
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.OpponentUpdate(update);
        this.opponentCharCount++;
    }
    OpponentDeleted() {
        var _a;
        this.opponentCharCount--;
        const update = new OpponentUpdate_1.OpponentUpdate(OpponentUpdate_1.OpponentUpdateType.Delete, this.GuessCount(), this.opponentCharCount);
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.OpponentUpdate(update);
    }
    OpponentLockedGuess() {
        var _a;
        this.opponentCharCount = 0;
        const update = new OpponentUpdate_1.OpponentUpdate(OpponentUpdate_1.OpponentUpdateType.Submit, this.GuessCount(), this.opponentCharCount);
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.OpponentUpdate(update);
    }
    UpdatedAnswerKnowledge(update) {
        var _a;
        this.state = State.CanSubmit;
        const hint = new Hint_1.Hint(update.playerKnowledge, update.opponentKnowledge, update.playerProgress, update.opponentProgress);
        const hintUpdate = new HintUpdate_1.HintUpdate(hint, this.guesses.length - 1);
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.HintUpdate(hintUpdate, () => this.CheckGameOver(update));
        if ((0, Updates_1.Gameover)(update)) {
            this.state = State.GameEnded;
        }
    }
    CheckGameOver(update) {
        var _a, _b, _c;
        if (this.state !== State.GameEnded) {
            return;
        }
        if ((0, Updates_1.Win)(update)) {
            (_a = this.view) === null || _a === void 0 ? void 0 : _a.GameOver(EndGameView_1.EndGameState.Won);
        }
        if ((0, Updates_1.Loss)(update)) {
            (_b = this.view) === null || _b === void 0 ? void 0 : _b.GameOver(EndGameView_1.EndGameState.Lost);
        }
        if ((0, Updates_1.Tie)(update)) {
            (_c = this.view) === null || _c === void 0 ? void 0 : _c.GameOver(EndGameView_1.EndGameState.Tied);
        }
    }
    SetSecret(secret) {
        var _a;
        this.Reset();
        this.secret = secret;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.SetSecret(secret);
        this.state = State.CanSubmit;
    }
    Reset() {
        var _a;
        this.secret = null;
        this.state = State.WaitingForKnowledge;
        this.guesses = [];
        this.currentGuess = '';
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.Reset();
    }
}
exports.PlayerBoard = PlayerBoard;
//# sourceMappingURL=PlayerBoard.js.map