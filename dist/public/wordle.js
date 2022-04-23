"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wordle = void 0;
const words_js_1 = require("./words.js");
const NUMBER_OF_GUESSES = 6;
const WORD_LENGTH = 5;
class Wordle {
    constructor() {
        this.guesses = [];
        this.currentGuess = '';
        this._answer =
            words_js_1.WORDS[Math.floor(Math.random() * words_js_1.WORDS.length)].toUpperCase();
    }
    AddChar(c) {
        if (this.currentGuess.length >= WORD_LENGTH) {
            return;
        }
        this.currentGuess += c;
    }
    Delete() {
        if (this.currentGuess.length === 0) {
            return;
        }
        this.currentGuess = this.currentGuess.slice(0, -1);
    }
    Submit() {
        if (this.currentGuess.length !== WORD_LENGTH) {
            return;
        }
        console.log(`answer is: ${this._answer}`);
        console.log(`guess is: ${this._answer}`);
        if (this._answer === this.currentGuess) {
            console.log('guess is correct!');
        }
        this.guesses.push(this.currentGuess);
        this.currentGuess = '';
    }
    WordLength() {
        return WORD_LENGTH;
    }
    TotalGuesses() {
        return NUMBER_OF_GUESSES;
    }
}
exports.Wordle = Wordle;
//# sourceMappingURL=wordle.js.map