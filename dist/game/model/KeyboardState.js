"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyboardState = void 0;
const ModelState_1 = require("./ModelState");
const KeyboardView_1 = require("./view/KeyboardView");
class KeyboardState extends ModelState_1.ModelState {
    Reset() {
        var _a;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.Reset();
    }
    constructor(hasView, input) {
        var _a;
        super(KeyboardView_1.KeyboardView, hasView);
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.Initialize(input);
    }
}
exports.KeyboardState = KeyboardState;
//# sourceMappingURL=KeyboardState.js.map