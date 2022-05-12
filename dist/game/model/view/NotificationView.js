"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationView = void 0;
const Subview_1 = require("./Subview");
class NotificationView extends Subview_1.Subview {
    constructor() {
        const base = document.getElementById('notification');
        super(base, 'notification');
    }
    SetText(text) {
        return new Promise(resolve => {
            this.root.innerText = text;
            resolve();
        });
    }
    Won() {
        return this.SetText('You won!');
    }
    Lost() {
        return this.SetText('You lost!');
    }
    Tie() {
        return this.SetText('You tied!');
    }
}
exports.NotificationView = NotificationView;
//# sourceMappingURL=NotificationView.js.map