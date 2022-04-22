"use strict";
const NUMBER_OF_GUESSES = 6;
function initBoard() {
    const gameboard = document.getElementById('game-board');
    console.log(`has board: ${gameboard !== null}`);
    for (let i = 0; i < NUMBER_OF_GUESSES; i++) {
        const row = document.createElement('div');
        row.className = 'letter-row';
        for (let j = 0; j < 5; j++) {
            const box = document.createElement('div');
            box.className = 'letter-box';
            row.appendChild(box);
        }
        gameboard === null || gameboard === void 0 ? void 0 : gameboard.appendChild(row);
    }
}
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
function initKeyboard() {
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
function registerKeyboard() {
    document.addEventListener('keyup', e => {
        const key = String(e.key).toUpperCase();
        if (key === 'BACKSPACE') {
            console.log(`Key pressed: ${key}`);
            return;
        }
        if (key === 'ENTER') {
            console.log(`Key pressed: ${key}`);
            return;
        }
        const keysPressed = key.match('[A-Z]');
        if (!keysPressed || keysPressed.length > 1) {
            return;
        }
        else {
            console.log(`Key pressed: ${key}`);
            return;
        }
    });
}
initBoard();
initKeyboard();
registerKeyboard();
//# sourceMappingURL=app.js.map