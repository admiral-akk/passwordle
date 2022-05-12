"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelState = void 0;
class ModelState {
    constructor(view) {
        this.view = view;
    }
    Exit() {
        var _a;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.Exit();
    }
}
exports.ModelState = ModelState;
//# sourceMappingURL=ModelState.js.map