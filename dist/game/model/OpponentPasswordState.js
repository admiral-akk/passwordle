"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpponentPasswordState = void 0;
const OpponentPasswordView_1 = require("./view/OpponentPasswordView");
var State;
(function (State) {
    State[State["WaitingForPassword"] = 0] = "WaitingForPassword";
    State[State["PasswordRecieved"] = 1] = "PasswordRecieved";
})(State || (State = {}));
class OpponentPasswordState {
    constructor(hasView) {
        this.password = ['', '', '', '', ''];
        this.state = State.WaitingForPassword;
        this.view = null;
        if (hasView) {
            this.view = new OpponentPasswordView_1.OpponentPasswordView();
        }
    }
    Exit() {
        var _a;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.Exit();
    }
    Reset() {
        this.password = ['', '', '', '', ''];
        this.state = State.WaitingForPassword;
    }
    Update(progress) {
        var _a;
        for (let i = 0; i < progress.knownCharacters.length; i++) {
            if (progress.knownCharacters[i] !== '') {
                this.password[i] = progress.knownCharacters[i];
            }
        }
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.Update(progress);
        return [];
    }
    Won() {
        return this.password.filter(c => c === '').length === 0;
    }
}
exports.OpponentPasswordState = OpponentPasswordState;
//# sourceMappingURL=OpponentPasswordState.js.map