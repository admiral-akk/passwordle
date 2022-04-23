"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
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
    }
    Update(priorGuesses, currentGuess) {
        for (let row_index = 0; row_index < this._letterBoxes.length; row_index++) {
            for (let letter_index = 0; letter_index < this._letterBoxes[row_index].length; letter_index++) {
                const letter = this._letterBoxes[row_index][letter_index];
                if (row_index > priorGuesses.length) {
                    letter.innerText = '';
                }
                else if (row_index < priorGuesses.length) {
                    letter.innerText = priorGuesses[row_index][letter_index];
                }
                else if (letter_index < currentGuess.length) {
                    letter.innerText = currentGuess[letter_index];
                }
                else {
                    letter.innerText = '';
                }
            }
        }
    }
}
exports.Board = Board;
//# sourceMappingURL=board.js.map