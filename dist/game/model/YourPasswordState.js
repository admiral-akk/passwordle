"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YourPasswordState = void 0;
const YourPasswordView_1 = require("./view/YourPasswordView");
const ModelState_1 = require("./ModelState");
var State;
(function (State) {
    State[State["WaitingForPassword"] = 0] = "WaitingForPassword";
    State[State["PasswordRecieved"] = 1] = "PasswordRecieved";
})(State || (State = {}));
class YourPasswordState extends ModelState_1.ModelState {
    constructor(hasView) {
        super(YourPasswordView_1.YourPasswordView, hasView);
        this.password = null;
        this.knownCharacters = ['', '', '', '', ''];
        this.state = State.WaitingForPassword;
    }
    SetPassword(password) {
        var _a;
        this.password = password;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.SetSecret(this.password);
    }
    Reset() {
        this.password = null;
        this.knownCharacters = ['', '', '', '', ''];
        this.state = State.WaitingForPassword;
    }
    Update(target, playerGuess) {
        for (let i = 0; i < target.knownCharacters.length; i++) {
            if (target.knownCharacters[i] !== '') {
                this.knownCharacters[i] = target.knownCharacters[i];
            }
        }
        if (this.view) {
            return this.view.Update(target, playerGuess);
        }
        return [];
    }
    Lost() {
        return this.knownCharacters.filter(c => c === '').length === 0;
    }
}
exports.YourPasswordState = YourPasswordState;
//# sourceMappingURL=YourPasswordState.js.map