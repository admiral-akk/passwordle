"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const board_js_1 = require("./board.js");
const keyboard_js_1 = require("./keyboard.js");
const wordle_js_1 = require("./wordle.js");
const wordle = new wordle_js_1.Wordle();
const board = new board_js_1.Board(wordle.TotalGuesses(), wordle.WordLength());
const keyboard = new keyboard_js_1.Keyboard();
function registerKeyboard() {
    document.addEventListener('keyup', e => {
        const key = String(e.key).toUpperCase();
        if (key === 'BACKSPACE') {
            wordle.Delete();
            board.Update(wordle.guesses, wordle.currentGuess);
            return;
        }
        if (key === 'ENTER') {
            wordle.Submit();
            board.Update(wordle.guesses, wordle.currentGuess);
            return;
        }
        const keysPressed = key.match('[A-Z]+');
        if (!keysPressed || keysPressed[0].length > 1) {
            return;
        }
        else {
            wordle.AddChar(key);
            board.Update(wordle.guesses, wordle.currentGuess);
            return;
        }
    });
}
registerKeyboard();
//# sourceMappingURL=app.js.map