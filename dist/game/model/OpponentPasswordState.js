"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpponentPasswordState = void 0;
const OpponentPasswordView_1 = require("../client/view/subview/OpponentPasswordView");
var State;
(function (State) {
    State[State["WaitingForPassword"] = 0] = "WaitingForPassword";
    State[State["PasswordRecieved"] = 1] = "PasswordRecieved";
})(State || (State = {}));
class OpponentPasswordState {
    constructor(hasView) {
        this.password = null;
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
        this.password = null;
        this.state = State.WaitingForPassword;
    }
}
exports.OpponentPasswordState = OpponentPasswordState;
//# sourceMappingURL=OpponentPasswordState.js.map