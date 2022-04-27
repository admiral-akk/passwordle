"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputManager = void 0;
const Events_1 = require("./Events");
class InputManager {
    constructor() {
        this.registerKeyboardEvents();
    }
    registerKeyboardEvents() {
        document.addEventListener('keyup', e => {
            const key = String(e.key).toUpperCase();
            if (key === 'BACKSPACE') {
                document.dispatchEvent(new Events_1.DeleteCommand());
                return;
            }
            if (key === 'ENTER') {
                document.dispatchEvent(new Events_1.SubmitCommand());
                return;
            }
            const keysPressed = key.match('[A-Z]+');
            if (!keysPressed || key.length > 1) {
                return;
            }
            else {
                document.dispatchEvent(new Events_1.AddCharCommand(key));
                return;
            }
        });
    }
}
exports.InputManager = InputManager;
//# sourceMappingURL=InputManager.js.map