"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardView = void 0;
const Knowledge_1 = require("../structs/Knowledge");
class BoardView {
    constructor(guessCount, wordLength) {
        this.letterBoxes = [];
        const top = document.getElementById('game');
        const gameboard = document.createElement('div');
        gameboard.className = 'game-board';
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
            this.letterBoxes.push(rowArray);
        }
        top === null || top === void 0 ? void 0 : top.appendChild(gameboard);
        this.Clear();
    }
    UpdateWords(annotatedMoves) {
        for (let i = 0; i < annotatedMoves.length; i++) {
            const row = this.letterBoxes[i];
            const guess = annotatedMoves[i].knowledge.guess;
            const knowledge = annotatedMoves[i].knowledge.letterKnowledge;
            for (let j = 0; j < row.length; j++) {
                const letter = row[j];
                this.UpdateColor(letter, knowledge[j]);
                letter.innerText = guess[j];
            }
        }
    }
    UpdateGuess(guess, guessCount) {
        const row = this.letterBoxes[guessCount];
        for (let i = 0; i < row.length; i++) {
            if (i < guess.length) {
                row[i].innerText = guess[i];
            }
            else {
                row[i].innerText = '';
            }
        }
    }
    Clear() {
        this.letterBoxes.forEach(row => {
            row.forEach(letter => {
                letter.innerText = '';
                this.UpdateColor(letter, Knowledge_1.LetterState.None);
            });
        });
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
}
exports.BoardView = BoardView;
//# sourceMappingURL=BoardView.js.map