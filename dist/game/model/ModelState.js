"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelState = void 0;
class ModelState {
    constructor(makeView, hasView = false) {
        this.makeView = makeView;
        this.view = null;
        if (hasView) {
            this.view = new makeView();
        }
    }
    Exit() {
        var _a;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.Exit();
    }
}
exports.ModelState = ModelState;
//# sourceMappingURL=ModelState.js.map