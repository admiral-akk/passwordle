"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const board_js_1 = require("./board.js");
const keyboard_js_1 = require("./keyboard.js");
const wordle_js_1 = require("./wordle.js");
const wordle = new wordle_js_1.Wordle();
const board = new board_js_1.Board(wordle.TotalGuesses(), wordle.WordLength());
const keyboard = new keyboard_js_1.Keyboard();
//# sourceMappingURL=app.js.map