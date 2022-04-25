"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wordle = void 0;
const words_js_1 = require("./words.js");
const letter_state_js_1 = require("./letter_state.js");
const events_js_1 = require("./events.js");
const NUMBER_OF_GUESSES = 6;
const WORD_LENGTH = 5;
class Wordle {
    constructor() {
        this.guesses = [];
        this.currentGuess = '';
        this.states = this.InitStates();
        this._answer =
            words_js_1.WORDS[Math.floor(Math.random() * words_js_1.WORDS.length)].toUpperCase();
        document.addEventListener('add_key', e => {
            this.AddChar(e.detail);
        });
        document.addEventListener('delete', () => {
            this.Delete();
        });
        document.addEventListener('submit', () => {
            this.Submit();
        });
    }
    InitStates() {
        const states = [];
        for (let i = 0; i < NUMBER_OF_GUESSES; i++) {
            const state = [];
            for (let j = 0; j < WORD_LENGTH; j++) {
                state.push(letter_state_js_1.LetterState.None);
            }
            states.push(state);
        }
        return states;
    }
    AddChar(char) {
        if (this.currentGuess.length >= WORD_LENGTH) {
            console.log(`Character limit: ${this.currentGuess}`);
            return;
        }
        this.currentGuess += char;
        document.dispatchEvent(new events_js_1.BoardUpdatedEvent(this));
    }
    Delete() {
        if (this.currentGuess.length === 0) {
            console.log(`Nothing to delete: ${this.currentGuess}`);
            return;
        }
        this.currentGuess = this.currentGuess.slice(0, -1);
        document.dispatchEvent(new events_js_1.BoardUpdatedEvent(this));
    }
    Submit() {
        if (this.currentGuess.length !== WORD_LENGTH) {
            console.log(`Too short: ${this.currentGuess}`);
            return;
        }
        if (!words_js_1.WORDS.includes(this.currentGuess.toLowerCase())) {
            console.log(`Invalid word: ${this.currentGuess}`);
            return;
        }
        const answer_state = this.states[this.guesses.length];
        for (let i = 0; i < this.currentGuess.length; i++) {
            answer_state[i] = letter_state_js_1.LetterState.None;
            if (this.currentGuess[i] === this._answer[i]) {
                answer_state[i] = letter_state_js_1.LetterState.Green;
            }
            if (!this._answer.includes(this.currentGuess[i])) {
                answer_state[i] = letter_state_js_1.LetterState.Grey;
            }
        }
        for (let i = 0; i < this.currentGuess.length; i++) {
            if (answer_state[i] !== letter_state_js_1.LetterState.None) {
                continue;
            }
            let matched = 0;
            for (let j = 0; j < this.currentGuess.length; j++) {
                if (i === j) {
                    continue;
                }
                if (answer_state[j] !== letter_state_js_1.LetterState.Green &&
                    answer_state[j] !== letter_state_js_1.LetterState.Yellow) {
                    continue;
                }
                if (this.currentGuess[j] !== this.currentGuess[i]) {
                    continue;
                }
                matched++;
            }
            const charCount = (this._answer.match(new RegExp(this.currentGuess[i], 'g')) || []).length;
            if (charCount > matched) {
                answer_state[i] = letter_state_js_1.LetterState.Yellow;
            }
            else {
                answer_state[i] = letter_state_js_1.LetterState.Grey;
            }
        }
        this.guesses.push(this.currentGuess);
        console.log(`answer is: ${this._answer}`);
        console.log(`guess is: ${this.currentGuess}`);
        if (this._answer === this.currentGuess) {
            console.log('guess is correct!');
        }
        this.currentGuess = '';
        document.dispatchEvent(new events_js_1.BoardUpdatedEvent(this));
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