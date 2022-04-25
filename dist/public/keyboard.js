"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Keyboard = void 0;
const events_1 = require("./events");
const letter_state_1 = require("./letter_state");
const KEYBOARD_KEYS = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['Del', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Enter'],
];
class Keyboard {
    constructor() {
        const keyboard = document.getElementById('keyboard');
        this.keys = [];
        for (let i = 0; i < KEYBOARD_KEYS.length; i++) {
            const row = document.createElement('div');
            row.className = 'keyboard-row';
            for (let j = 0; j < KEYBOARD_KEYS[i].length; j++) {
                const key = document.createElement('button');
                key.className = 'keyboard-key';
                key.innerText = KEYBOARD_KEYS[i][j].toUpperCase();
                this.registerKey(key);
                row.appendChild(key);
            }
            keyboard === null || keyboard === void 0 ? void 0 : keyboard.appendChild(row);
        }
        this.registerKeyboardEvents();
        document.addEventListener('update_keyboard', e => {
            this.keys.forEach(b => {
                this.colorKey(b, e.detail.keyboardStates[b.innerText]);
            });
        });
    }
    registerKey(key) {
        this.keys.push(key);
        key.addEventListener('click', () => {
            const text = key.innerText;
            if (text === 'ENTER') {
                document.dispatchEvent(new events_1.SubmitWordEvent());
            }
            else if (text === 'DEL') {
                document.dispatchEvent(new events_1.DeleteEvent());
            }
            else {
                document.dispatchEvent(new events_1.AddCharEvent(text));
            }
        });
    }
    colorKey(key, state) {
        switch (state) {
            case letter_state_1.LetterState.None:
                key.style.backgroundColor = 'white';
                break;
            case letter_state_1.LetterState.Yellow:
                key.style.backgroundColor = 'yellow';
                break;
            case letter_state_1.LetterState.Green:
                key.style.backgroundColor = 'green';
                break;
            case letter_state_1.LetterState.Grey:
                key.style.backgroundColor = 'grey';
                break;
        }
    }
    registerKeyboardEvents() {
        document.addEventListener('keyup', e => {
            const key = String(e.key).toUpperCase();
            if (key === 'BACKSPACE') {
                document.dispatchEvent(new events_1.DeleteEvent());
                return;
            }
            if (key === 'ENTER') {
                document.dispatchEvent(new events_1.SubmitWordEvent());
                return;
            }
            const keysPressed = key.match('[A-Z]+');
            if (!keysPressed || keysPressed[0].length > 1) {
                return;
            }
            else {
                document.dispatchEvent(new events_1.AddCharEvent(key));
                return;
            }
        });
    }
}
exports.Keyboard = Keyboard;
//# sourceMappingURL=keyboard.js.map