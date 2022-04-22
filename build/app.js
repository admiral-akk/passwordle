"use strict";
const NUMBER_OF_GUESSES = 6;
function initBoard() {
    const board = document.getElementById('.game-board');
    console.log(`has board: ${board !== null}`);
    for (let i = 0; i < NUMBER_OF_GUESSES; i++) {
        const row = document.createElement('div');
        row.className = 'letter-row';
        for (let j = 0; j < 5; j++) {
            const box = document.createElement('div');
            box.className = 'letter-box';
            row.appendChild(box);
        }
        board === null || board === void 0 ? void 0 : board.appendChild(row);
    }
}
initBoard();
//# sourceMappingURL=app.js.map