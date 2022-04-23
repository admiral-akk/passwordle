"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const keyboard_js_1 = require("./keyboard.js");
const wordle_js_1 = require("./wordle.js");
const wordle = new wordle_js_1.Wordle();
function initBoard() {
    const gameboard = document.getElementById('game-board');
    for (let i = 0; i < wordle.TotalGuesses(); i++) {
        const row = document.createElement('div');
        row.className = 'letter-row';
        for (let j = 0; j < wordle.WordLength(); j++) {
            const box = document.createElement('div');
            box.className = 'letter-box';
            row.appendChild(box);
        }
        gameboard === null || gameboard === void 0 ? void 0 : gameboard.appendChild(row);
    }
}
function UpdateBoard() {
    const gameboard = document.getElementById('game-board');
    const rows = gameboard === null || gameboard === void 0 ? void 0 : gameboard.getElementsByClassName('letter-row');
    for (let row_index = 0; row_index < wordle.TotalGuesses(); row_index++) {
        const row = rows === null || rows === void 0 ? void 0 : rows.item(row_index);
        const letters = row === null || row === void 0 ? void 0 : row.getElementsByClassName('letter-box');
        for (let letter_index = 0; letter_index < wordle.WordLength(); letter_index++) {
            const letter = letters === null || letters === void 0 ? void 0 : letters.item(letter_index);
            if (row_index > wordle.guesses.length) {
                letter.innerText = '';
            }
            else if (row_index < wordle.guesses.length) {
                letter.innerText = wordle.guesses[row_index][letter_index];
            }
            else if (letter_index < wordle.currentGuess.length) {
                letter.innerText = wordle.currentGuess[letter_index];
            }
            else {
                letter.innerText = '';
            }
        }
    }
}
function registerKeyboard() {
    document.addEventListener('keyup', e => {
        const key = String(e.key).toUpperCase();
        if (key === 'BACKSPACE') {
            wordle.Delete();
            UpdateBoard();
            console.log(`Key pressed: ${key}`);
            return;
        }
        if (key === 'ENTER') {
            wordle.Submit();
            UpdateBoard();
            console.log(`Key pressed: ${key}`);
            return;
        }
        const keysPressed = key.match('[A-Z]+');
        if (!keysPressed || keysPressed[0].length > 1) {
            return;
        }
        else {
            wordle.AddChar(key);
            UpdateBoard();
            console.log(`Key pressed: ${key}`);
            return;
        }
    });
}
initBoard();
(0, keyboard_js_1.InitKeyboard)();
registerKeyboard();
//# sourceMappingURL=app.js.map