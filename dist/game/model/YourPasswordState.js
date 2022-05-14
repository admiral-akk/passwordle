"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YourPasswordState = void 0;
const TargetProgress_1 = require("../../structs/TargetProgress");
const ModelState_1 = require("./ModelState");
class YourPasswordState extends ModelState_1.ModelState {
    constructor() {
        super(...arguments);
        this.knownCharacters = ['', '', '', '', ''];
    }
    Reset() {
        super.Reset();
        this.knownCharacters = ['', '', '', '', ''];
        this.password = undefined;
    }
    SetPassword(password) {
        var _a;
        this.password = password;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.SetSecret(this.password);
    }
    GetPassword() {
        return this.password;
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
    GetProgress() {
        return new TargetProgress_1.TargetProgress(this.knownCharacters);
    }
    Lost() {
        return this.knownCharacters.filter(c => c === '').length === 0;
    }
}
exports.YourPasswordState = YourPasswordState;
//# sourceMappingURL=YourPasswordState.js.map