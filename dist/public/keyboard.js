"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitKeyboard = void 0;
const KEYBOARD_KEYS = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['Del', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Enter'],
];
function registerKey(key) {
    key.addEventListener('click', () => {
        let text = key.innerText;
        if (text === 'DEL') {
            text = 'Backspace';
        }
        document.dispatchEvent(new KeyboardEvent('keyup', { key: text }));
    });
}
function InitKeyboard() {
    const keyboard = document.getElementById('keyboard');
    for (let i = 0; i < KEYBOARD_KEYS.length; i++) {
        const row = document.createElement('div');
        row.className = 'keyboard-row';
        for (let j = 0; j < KEYBOARD_KEYS[i].length; j++) {
            const key = document.createElement('button');
            key.className = 'keyboard-key';
            key.innerText = KEYBOARD_KEYS[i][j].toUpperCase();
            registerKey(key);
            row.appendChild(key);
        }
        keyboard === null || keyboard === void 0 ? void 0 : keyboard.appendChild(row);
    }
}
exports.InitKeyboard = InitKeyboard;
//# sourceMappingURL=keyboard.js.map