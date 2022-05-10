"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationState = void 0;
const NotificationView_1 = require("./view/NotificationView");
class NotificationState {
    constructor(hasView) {
        this.view = null;
        if (hasView) {
            this.view = new NotificationView_1.NotificationView();
        }
    }
    Reset() {
        var _a;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.Reset();
    }
    Exit() {
        var _a;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.Exit();
    }
    Won() {
        var _a;
        if (this.view) {
            return (_a = this.view) === null || _a === void 0 ? void 0 : _a.Won();
        }
        return Promise.resolve();
    }
    Lost() {
        var _a;
        if (this.view) {
            return (_a = this.view) === null || _a === void 0 ? void 0 : _a.Lost();
        }
        return Promise.resolve();
    }
    Tied() {
        var _a;
        if (this.view) {
            return (_a = this.view) === null || _a === void 0 ? void 0 : _a.Tie();
        }
        return Promise.resolve();
    }
}
exports.NotificationState = NotificationState;
//# sourceMappingURL=NotificationState.js.map