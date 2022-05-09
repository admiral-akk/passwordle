"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerBoard = void 0;
const YourBoardState_1 = require("./YourBoardState");
const YourPasswordState_1 = require("./YourPasswordState");
const OpponentBoardState_1 = require("./OpponentBoardState");
const OpponentPasswordState_1 = require("./OpponentPasswordState");
var State;
(function (State) {
    State[State["WaitingForKnowledge"] = 0] = "WaitingForKnowledge";
    State[State["CanSubmit"] = 1] = "CanSubmit";
    State[State["GameEnded"] = 2] = "GameEnded";
})(State || (State = {}));
class PlayerBoard {
    constructor(hasView = false) {
        this.hasView = hasView;
        this.state = State.WaitingForKnowledge;
        this.yourBoard = new YourBoardState_1.YourBoardState(this.hasView);
        this.yourPassword = new YourPasswordState_1.YourPasswordState(this.hasView);
        this.opponentBoard = new OpponentBoardState_1.OpponentBoardState(this.hasView);
        this.opponentPassword = new OpponentPasswordState_1.OpponentPasswordState(this.hasView);
    }
    Reset() {
        this.yourBoard.Reset();
        this.yourPassword.Reset();
        this.opponentBoard.Reset();
        this.opponentPassword.Reset();
    }
    Exit() {
        this.yourBoard.Exit();
        this.yourPassword.Exit();
        this.opponentBoard.Exit();
        this.opponentPassword.Exit();
    }
    GameClientReady() { }
    OpponentDisconnected() {
        this.state = State.GameEnded;
    }
    AddedChar(update) {
        return this.yourBoard.AddChar(update.char);
    }
    Deleted() {
        return this.yourBoard.Delete();
    }
    LockedGuess() {
        this.state = State.WaitingForKnowledge;
        return this.yourBoard.LockedGuess();
    }
    IsGameOver() {
        return this.yourPassword.Lost() || this.opponentPassword.Won();
    }
    OpponentAddedChar() {
        this.opponentBoard.OpponentAddedChar();
    }
    OpponentDeleted() {
        this.opponentBoard.OpponentDeleted();
    }
    OpponentLockedGuess() {
        this.opponentBoard.OpponentLockedGuess();
    }
    UpdatedAnswerKnowledge(update) {
        this.yourBoard.Update(update.playerKnowledge);
        this.opponentBoard.Update(update.opponentKnowledge);
        this.yourPassword.Update(update.playerProgress);
        this.opponentPassword.Update(update.opponentProgress);
        this.state = State.CanSubmit;
    }
    SetSecret(secret) {
        this.Reset();
        this.yourPassword.SetPassword(secret);
        this.state = State.CanSubmit;
    }
}
exports.PlayerBoard = PlayerBoard;
//# sourceMappingURL=PlayerBoard.js.map