"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Keyboard = void 0;
const events_1 = require("./events");
const Knowledge_1 = require("../game/logic/Knowledge");
const KEYBOARD_KEYS = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['Del', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Enter'],
];
class Keyboard {
    constructor() {
        const keyboard = document.getElementById('keyboard');
        this._keys = {};
        this._knowledge = {};
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
        document.addEventListener('update_knowledge', e => {
            const knowledge = e.detail.letterKnowledge;
            const guess = e.detail.guess;
            for (let i = 0; i < guess.length; i++) {
                this.UpdateKey(guess[i], knowledge[i]);
            }
        });
        document.addEventListener('new_game', () => {
            this.NewGame();
        });
    }
    registerKey(key) {
        this._keys[key.innerText] = key;
        this._knowledge[key.innerText] = Knowledge_1.LetterState.None;
        key.addEventListener('click', () => {
            const text = key.innerText;
            if (text === 'ENTER') {
                document.dispatchEvent(new events_1.SubmitCommand());
            }
            else if (text === 'DEL') {
                document.dispatchEvent(new events_1.DeleteEvent());
            }
            else {
                document.dispatchEvent(new events_1.AddCharEvent(text));
            }
        });
    }
    ColorKey(key, state) {
        switch (state) {
            case Knowledge_1.LetterState.None:
                key.style.backgroundColor = 'lightgrey';
                break;
            case Knowledge_1.LetterState.Yellow:
                key.style.backgroundColor = 'yellow';
                break;
            case Knowledge_1.LetterState.Green:
                key.style.backgroundColor = 'green';
                break;
            case Knowledge_1.LetterState.Grey:
                key.style.backgroundColor = 'grey';
                break;
        }
    }
    UpdateKey(char, state) {
        const currentState = this._knowledge[char];
        switch (state) {
            case Knowledge_1.LetterState.None:
            case Knowledge_1.LetterState.Grey:
                this._knowledge[char] = state;
                break;
            case Knowledge_1.LetterState.Yellow:
                if (currentState !== Knowledge_1.LetterState.Green) {
                    this._knowledge[char] = state;
                }
                break;
            case Knowledge_1.LetterState.Green:
                this._knowledge[char] = state;
                break;
        }
        this.ColorKey(this._keys[char], this._knowledge[char]);
    }
    NewGame() {
        for (const key in this._knowledge) {
            this._knowledge[key] = Knowledge_1.LetterState.None;
            this.ColorKey(this._keys[key], Knowledge_1.LetterState.None);
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
                document.dispatchEvent(new events_1.SubmitCommand());
                return;
            }
            const keysPressed = key.match('[A-Z]+');
            if (!keysPressed || key.length > 1) {
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