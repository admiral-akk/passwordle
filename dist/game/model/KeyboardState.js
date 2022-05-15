"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyboardState = void 0;
const LetterState_1 = require("../../structs/LetterState");
const ModelState_1 = require("./ModelState");
const ALPHABET = 'QWERTYUIOPASDFGHJKLZXCVBNM';
class KeyboardState extends ModelState_1.ModelState {
    constructor(view, input) {
        var _a;
        super(view);
        this.keyState = {};
        if (input) {
            (_a = this.view) === null || _a === void 0 ? void 0 : _a.Initialize(input);
        }
        this.Reset();
    }
    Reset() {
        super.Reset();
        this.keyState = {};
        for (let i = 0; i < ALPHABET.length; i++) {
            this.SetState(ALPHABET[i], LetterState_1.LetterState.NoKnowledge);
        }
    }
    SetState(key, state) {
        var _a;
        if (!(key in this.keyState)) {
            this.keyState[key] = state;
            return;
        }
        if (this.keyState[key] === LetterState_1.LetterState.Correct) {
            return;
        }
        if (this.keyState[key] === LetterState_1.LetterState.WrongPosition &&
            state !== LetterState_1.LetterState.Correct) {
            return;
        }
        this.keyState[key] = state;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.SetColor(key, state);
    }
    Update(knowledge) {
        knowledge.forEach(k => {
            for (let i = 0; i < k.guess.length; i++) {
                this.SetState(k.guess[i], k.letterKnowledge[i]);
            }
        });
    }
}
exports.KeyboardState = KeyboardState;
//# sourceMappingURL=KeyboardState.js.map