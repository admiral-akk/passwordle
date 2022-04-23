"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const words_js_1 = require("./words.js");
require("animate.css");
const NUMBER_OF_GUESSES = 6;
const WORD_LENGTH = 5;
const answer = words_js_1.WORDS[Math.floor(Math.random() * words_js_1.WORDS.length)].toUpperCase();
let guessesRemaining = NUMBER_OF_GUESSES;
let currentGuess = '';
function initBoard() {
    const gameboard = document.getElementById('game-board');
    for (let i = 0; i < NUMBER_OF_GUESSES; i++) {
        const row = document.createElement('div');
        row.className = 'letter-row';
        for (let j = 0; j < WORD_LENGTH; j++) {
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
function UpdateBoard() {
    const gameboard = document.getElementById('game-board');
    const rows = gameboard === null || gameboard === void 0 ? void 0 : gameboard.getElementsByClassName('letter-row');
    const row = rows === null || rows === void 0 ? void 0 : rows.item(NUMBER_OF_GUESSES - guessesRemaining);
    const letters = row === null || row === void 0 ? void 0 : row.getElementsByClassName('letter-box');
    for (let i = 0; i < WORD_LENGTH; i++) {
        const letter = letters === null || letters === void 0 ? void 0 : letters.item(i);
        if (i >= currentGuess.length) {
            letter.innerText = '';
        }
        else {
            letter.innerText = currentGuess[i];
        }
    }
}
function AddChar(c) {
    if (currentGuess.length < WORD_LENGTH) {
        currentGuess += c;
        UpdateBoard();
    }
}
function Delete() {
    if (currentGuess.length > 0) {
        currentGuess = currentGuess.slice(0, -1);
        UpdateBoard();
    }
}
function Submit() {
    if (currentGuess.length === WORD_LENGTH) {
        console.log(`answer is: ${answer}`);
        console.log(`guess is: ${currentGuess}`);
        if (answer === currentGuess) {
            console.log('guess is correct!');
        }
        currentGuess = '';
        guessesRemaining--;
        UpdateBoard();
    }
}
function registerKeyboard() {
    document.addEventListener('keyup', e => {
        const key = String(e.key).toUpperCase();
        if (key === 'BACKSPACE') {
            Delete();
            console.log(`Key pressed: ${key}`);
            return;
        }
        if (key === 'ENTER') {
            Submit();
            console.log(`Key pressed: ${key}`);
            return;
        }
        const keysPressed = key.match('[A-Z]+');
        if (!keysPressed || keysPressed[0].length > 1) {
            return;
        }
        else {
            AddChar(key);
            console.log(`Key pressed: ${key}`);
            return;
        }
    });
}
initBoard();
initKeyboard();
registerKeyboard();
//# sourceMappingURL=app.js.map