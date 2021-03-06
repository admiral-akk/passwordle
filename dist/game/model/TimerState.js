"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimerState = void 0;
const ModelState_1 = require("./ModelState");
const TIME_TILL_RANDOM_MILLIS = 30000;
var State;
(function (State) {
    State[State["None"] = 0] = "None";
    State[State["NoGuesses"] = 1] = "NoGuesses";
    State[State["PlayerGuessed"] = 2] = "PlayerGuessed";
    State[State["OpponentGuessed"] = 3] = "OpponentGuessed";
    State[State["BothGuessed"] = 4] = "BothGuessed";
})(State || (State = {}));
class TimerState extends ModelState_1.ModelState {
    constructor(view, timeExhausted) {
        super(view);
        this.timeExhausted = timeExhausted;
        this.state = State.None;
        this.timeLeft = TIME_TILL_RANDOM_MILLIS;
        this.lastUpdate = 0;
        this.SetState(State.NoGuesses);
    }
    Exit() {
        var _a;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.Exit();
    }
    Reset() {
        this.ResetTimer();
    }
    Stop() {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = undefined;
        }
    }
    LockedGuess() {
        switch (this.state) {
            case State.OpponentGuessed:
                this.SetState(State.BothGuessed);
                break;
            case State.NoGuesses:
                this.SetState(State.PlayerGuessed);
                break;
        }
    }
    OpponentSubmitted() {
        switch (this.state) {
            case State.PlayerGuessed:
                this.SetState(State.BothGuessed);
                break;
            case State.NoGuesses:
                this.SetState(State.OpponentGuessed);
                break;
        }
    }
    UpdateKnowledge() {
        this.SetState(State.NoGuesses);
    }
    ResetTimer() {
        var _a;
        this.Stop();
        this.timeLeft = TIME_TILL_RANDOM_MILLIS;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.Reset();
    }
    StartTimer() {
        var _a;
        this.lastUpdate = Date.now();
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.StartTimer(TIME_TILL_RANDOM_MILLIS);
        this.timeout = setInterval(() => this.UpdateTimer(), 100);
    }
    TimeExhausted() {
        var _a;
        this.Stop();
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.TimeExhausted();
        if (this.timeExhausted) {
            this.timeExhausted();
        }
    }
    UpdateTimer() {
        var _a;
        if (this.timeLeft <= 0) {
            this.TimeExhausted();
            return;
        }
        const updateTime = Date.now();
        this.timeLeft -= updateTime - this.lastUpdate;
        this.lastUpdate = updateTime;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.UpdateTime(this.timeLeft);
    }
    SetState(newState) {
        if (!this.view) {
            return;
        }
        if (this.state === State.OpponentGuessed) {
            this.ResetTimer();
        }
        this.state = newState;
        if (this.state === State.OpponentGuessed) {
            this.StartTimer();
        }
    }
}
exports.TimerState = TimerState;
//# sourceMappingURL=TimerState.js.map