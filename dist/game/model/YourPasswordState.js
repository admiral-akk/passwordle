"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YourPasswordState = void 0;
const YourPasswordView_1 = require("../client/view/subview/YourPasswordView");
var State;
(function (State) {
    State[State["WaitingForPassword"] = 0] = "WaitingForPassword";
    State[State["PasswordRecieved"] = 1] = "PasswordRecieved";
})(State || (State = {}));
class YourPasswordState {
    constructor(hasView) {
        this.password = null;
        this.state = State.WaitingForPassword;
        this.view = null;
        if (hasView) {
            this.view = new YourPasswordView_1.YourPasswordView();
        }
    }
    SetPassword(password) {
        var _a;
        this.password = password;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.SetSecret(this.password);
    }
    Exit() {
        var _a;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.Exit();
    }
    Reset() {
        this.password = null;
        this.state = State.WaitingForPassword;
    }
    Update(target) {
        var _a;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.Update(target);
    }
}
exports.YourPasswordState = YourPasswordState;
//# sourceMappingURL=YourPasswordState.js.map