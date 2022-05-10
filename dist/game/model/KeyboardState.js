"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyboardState = void 0;
const LetterState_1 = require("../client/structs/LetterState");
const ModelState_1 = require("./ModelState");
const KeyboardView_1 = require("./view/KeyboardView");
const ALPHABET = 'QWERTYUIOPASDFGHJKLZXCVBNM';
class KeyboardState extends ModelState_1.ModelState {
    constructor(hasView, input) {
        var _a;
        super(KeyboardView_1.KeyboardView, hasView);
        this.keyState = {};
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.Initialize(input);
        this.Reset();
    }
    Reset() {
        var _a;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.Reset();
        this.keyState = {};
        for (let i = 0; i < ALPHABET.length; i++) {
            this.SetState(ALPHABET[i], LetterState_1.LetterState.NoKnowledge);
        }
    }
    SetState(key, state) {
        var _a;
        this.keyState[key] = state;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.SetColor(key, state);
    }
}
exports.KeyboardState = KeyboardState;
//# sourceMappingURL=KeyboardState.js.map