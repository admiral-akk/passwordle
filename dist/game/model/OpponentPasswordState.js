"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpponentPasswordState = void 0;
const TargetProgress_1 = require("../../structs/TargetProgress");
const ModelState_1 = require("./ModelState");
var State;
(function (State) {
    State[State["WaitingForPassword"] = 0] = "WaitingForPassword";
    State[State["PasswordRecieved"] = 1] = "PasswordRecieved";
})(State || (State = {}));
class OpponentPasswordState extends ModelState_1.ModelState {
    constructor() {
        super(...arguments);
        this.password = ['', '', '', '', ''];
        this.state = State.WaitingForPassword;
    }
    Update(progress, playerGuess) {
        for (let i = 0; i < progress.knownCharacters.length; i++) {
            if (progress.knownCharacters[i] !== '') {
                this.password[i] = progress.knownCharacters[i];
            }
        }
        if (this.view) {
            return this.view.Update(progress, playerGuess);
        }
        return [];
    }
    GetProgress() {
        return new TargetProgress_1.TargetProgress(this.password);
    }
    Won() {
        return this.password.filter(c => c === '').length === 0;
    }
}
exports.OpponentPasswordState = OpponentPasswordState;
//# sourceMappingURL=OpponentPasswordState.js.map