"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
const animate_1 = require("./animate");
const events_1 = require("./events");
const Knowledge_1 = require("../game/logic/Knowledge");
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
        this._guessCount = 0;
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
        document.addEventListener('game_history', e => {
            this.GameHistory(e.detail);
        });
    }
    GameHistory(history) {
        const serverCount = history.history.length;
        console.log(`Server has ${serverCount} guesses, client has ${this._guessCount}!`);
        if (this._guessCount > serverCount) {
            throw `Server has ${serverCount} guesses, client has ${this._guessCount}!`;
        }
        if (this._guessCount === serverCount) {
            return;
        }
        if (this._guessCount < serverCount) {
            for (let i = this._guessCount; i < serverCount; i++) {
                document.dispatchEvent(new events_1.KnowledgeUpdateEvent(history.history[i].knowledge));
            }
        }
    }
    NewGame() {
        this._letterBoxes.forEach(row => {
            row.forEach(letter => {
                letter.innerText = '';
                this.UpdateColor(letter, Knowledge_1.LetterState.None);
            });
        });
    }
    PreviousRow() {
        return this._letterBoxes[this._guessCount - 1];
    }
    CurrentRow() {
        return this._letterBoxes[this._guessCount];
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
            console.log(`Nothing to dlete: ${this._currentGuess}`);
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
        document.dispatchEvent(new events_1.SubmitWordEvent(this._currentGuess));
    }
    UpdateColor(letter, knowledge) {
        switch (knowledge) {
            case Knowledge_1.LetterState.None:
                letter.style.backgroundColor = 'white';
                break;
            case Knowledge_1.LetterState.Yellow:
                letter.style.backgroundColor = 'yellow';
                break;
            case Knowledge_1.LetterState.Green:
                letter.style.backgroundColor = 'green';
                break;
            case Knowledge_1.LetterState.Grey:
                letter.style.backgroundColor = 'grey';
                break;
        }
    }
    UpdateKnowledge(knowledge) {
        this._guessCount++;
        const row = this.PreviousRow();
        for (let letter_index = 0; letter_index < this._wordLength; letter_index++) {
            const letter = row[letter_index];
            const letterKnowledge = knowledge.letterKnowledge[letter_index];
            letter.innerText = knowledge.guess[letter_index];
            this.UpdateColor(letter, letterKnowledge);
            (0, animate_1.AnimateCSS)(letter, animate_1.AnimationType.Pulse);
        }
        this._currentGuess = '';
    }
}
exports.Board = Board;
//# sourceMappingURL=board.js.map