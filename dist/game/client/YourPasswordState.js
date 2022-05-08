"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YourPasswordState = void 0;
const BoardState_1 = require("../model/BoardState");
var State;
(function (State) {
    State[State["WaitingForPassword"] = 0] = "WaitingForPassword";
    State[State["PasswordRecieved"] = 1] = "PasswordRecieved";
})(State || (State = {}));
class YourPasswordState extends BoardState_1.BoardState {
    constructor() {
        super(...arguments);
        this.password = null;
        this.state = State.WaitingForPassword;
        this.view = new YourPasswordView();
    }
    SetPassword(password) {
        this.password = password;
        this.view.SetPassword(this.password);
    }
}
exports.YourPasswordState = YourPasswordState;
class YourPasswordView {
    SetPassword(password) { }
}
//# sourceMappingURL=YourPasswordState.js.map