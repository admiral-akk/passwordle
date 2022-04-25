"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
const events_1 = require("./events");
const knowledge_1 = require("./knowledge");
const words_1 = require("./words");
class Board {
    constructor(guessCount, wordLength) {
        this._letterBoxes = [];
        const gameboard = document.getElementById('game-board');
        for (let i = 0; i < guessCount; i++) {
            const rowArray = [];
            const row = document.createElement('div');
            row.className = 'letter-row';
            for (let j = 0; j < wordLength; j++) {
                const box = document.createElement('div');
                box.className = 'letter-box';
                row.appendChild(box);
                rowArray.push(box);
            }
            gameboard === null || gameboard === void 0 ? void 0 : gameboard.appendChild(row);
            this._letterBoxes.push(rowArray);
        }
        document.addEventListener('update_knowledge', e => {
            this.UpdateKnowledge(e.detail);
        });
        this._guesses = [];
        this._knowledge = [];
        this._currentGuess = '';
        this._wordLength = wordLength;
        document.addEventListener('add_key', e => {
            this.AddChar(e.detail);
        });
        document.addEventListener('delete', () => {
            this.Delete();
        });
        document.addEventListener('submit_command', () => {
            this.Submit();
        });
        document.addEventListener('new_game', () => {
            this.NewGame();
        });
    }
    NewGame() {
        this._letterBoxes.forEach(row => {
            row.forEach(letter => {
                letter.innerText = '';
                this.UpdateColor(letter, knowledge_1.LetterState.None);
            });
        });
    }
    PreviousRow() {
        return this._letterBoxes[this._guesses.length - 1];
    }
    CurrentRow() {
        return this._letterBoxes[this._guesses.length];
    }
    CurrentLetter() {
        const row = this.CurrentRow();
        return row[this._currentGuess.length];
    }
    LastLetter() {
        const row = this.CurrentRow();
        return row[this._currentGuess.length - 1];
    }
    AddChar(char) {
        if (this._currentGuess.length >= this._wordLength) {
            console.log(`Character limit: ${this._currentGuess}`);
            return;
        }
        const letter = this.CurrentLetter();
        letter.innerText = char;
        this._currentGuess += char;
    }
    Delete() {
        if (this._currentGuess.length === 0) {
            console.log(`Nothing to delete: ${this._currentGuess}`);
            return;
        }
        const letter = this.LastLetter();
        letter.innerText = '';
        this._currentGuess = this._currentGuess.slice(0, -1);
    }
    Submit() {
        if (this._currentGuess.length !== this._wordLength) {
            console.log(`Too short: ${this._currentGuess}`);
            return;
        }
        if (!words_1.WORDS.includes(this._currentGuess.toLowerCase())) {
            console.log(`Invalid word: ${this._currentGuess}`);
            return;
        }
        this._guesses.push(this._currentGuess);
        document.dispatchEvent(new events_1.SubmitWordEvent(this._currentGuess));
        this._currentGuess = '';
    }
    UpdateColor(letter, knowledge) {
        switch (knowledge) {
            case knowledge_1.LetterState.None:
                letter.style.backgroundColor = 'white';
                break;
            case knowledge_1.LetterState.Yellow:
                letter.style.backgroundColor = 'yellow';
                break;
            case knowledge_1.LetterState.Green:
                letter.style.backgroundColor = 'green';
                break;
            case knowledge_1.LetterState.Grey:
                letter.style.backgroundColor = 'grey';
                break;
        }
    }
    UpdateKnowledge(knowledge) {
        const row = this.PreviousRow();
        for (let letter_index = 0; letter_index < this._wordLength; letter_index++) {
            const letter = row[letter_index];
            const letterKnowledge = knowledge.letterKnowledge[letter_index];
            this.UpdateColor(letter, letterKnowledge);
        }
    }
}
exports.Board = Board;
//# sourceMappingURL=board.js.map