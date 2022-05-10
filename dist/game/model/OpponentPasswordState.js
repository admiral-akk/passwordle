"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpponentPasswordState = void 0;
const ModelState_1 = require("./ModelState");
const OpponentPasswordView_1 = require("./view/OpponentPasswordView");
var State;
(function (State) {
    State[State["WaitingForPassword"] = 0] = "WaitingForPassword";
    State[State["PasswordRecieved"] = 1] = "PasswordRecieved";
})(State || (State = {}));
class OpponentPasswordState extends ModelState_1.ModelState {
    constructor(hasView) {
        super(OpponentPasswordView_1.OpponentPasswordView, hasView);
        this.password = ['', '', '', '', ''];
        this.state = State.WaitingForPassword;
    }
    Reset() {
        this.password = ['', '', '', '', ''];
        this.state = State.WaitingForPassword;
    }
    Update(progress) {
        for (let i = 0; i < progress.knownCharacters.length; i++) {
            if (progress.knownCharacters[i] !== '') {
                this.password[i] = progress.knownCharacters[i];
            }
        }
        if (this.view) {
            return this.view.Update(progress);
        }
        return [];
    }
    Won() {
        return this.password.filter(c => c === '').length === 0;
    }
}
exports.OpponentPasswordState = OpponentPasswordState;
//# sourceMappingURL=OpponentPasswordState.js.map