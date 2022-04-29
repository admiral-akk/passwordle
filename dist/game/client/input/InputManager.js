"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputManager = void 0;
class InputManager {
    constructor(addChar, deleteChar, submitWord) {
        this.addChar = addChar;
        this.deleteChar = deleteChar;
        this.submitWord = submitWord;
        this.registerKeyboardEvents();
    }
    registerKeyboardEvents() {
        document.addEventListener('keyup', e => {
            const key = String(e.key).toUpperCase();
            if (key === 'BACKSPACE') {
                this.deleteChar();
                return;
            }
            if (key === 'ENTER') {
                this.submitWord();
                return;
            }
            const keysPressed = key.match('[A-Z]+');
            if (!keysPressed || key.length > 1) {
                return;
            }
            else {
                this.addChar(key);
                return;
            }
        });
    }
}
exports.InputManager = InputManager;
//# sourceMappingURL=InputManager.js.map