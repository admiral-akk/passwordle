"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LobbyView = void 0;
class LobbyView {
    // Using https://gameprogrammingpatterns.com/state.html pattern here.
    constructor() {
        this.elements = [];
        this.modal = null;
        const root = document.getElementById('lobby');
        const background = this.AddDiv(root, 'background');
        const modal = this.AddDiv(background, 'modal');
        modal.id = 'modal';
    }
    Enter() {
        this.modal = this.Modal();
    }
    Exit() {
        var _a;
        (_a = this.modal) === null || _a === void 0 ? void 0 : _a.Exit();
        this.elements.forEach(element => element.remove());
    }
    AddDiv(base, className) {
        const div = document.createElement('div');
        div.className = className;
        base.appendChild(div);
        this.elements.push(div);
        return div;
    }
}
exports.LobbyView = LobbyView;
//# sourceMappingURL=LobbyView.js.map