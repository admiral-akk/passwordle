import {LetterState} from './letter_state.js';

export class Board {
  private _letterBoxes: HTMLDivElement[][];

  constructor(guessCount: number, wordLength: number) {
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
      gameboard?.appendChild(row);
      this._letterBoxes.push(rowArray);
    }
  }

  Update(
    priorGuesses: string[],
    currentGuess: string,
    knowledge: LetterState[][]
  ) {
    for (let row_index = 0; row_index < this._letterBoxes.length; row_index++) {
      for (
        let letter_index = 0;
        letter_index < this._letterBoxes[row_index].length;
        letter_index++
      ) {
        const letter = this._letterBoxes[row_index][letter_index];
        if (row_index > priorGuesses.length) {
          letter.innerText = '';
        } else if (row_index < priorGuesses.length) {
          letter.innerText = priorGuesses[row_index][letter_index];
        } else if (letter_index < currentGuess.length) {
          letter.innerText = currentGuess[letter_index];
        } else {
          letter.innerText = '';
        }
        switch (knowledge[row_index][letter_index]) {
          case LetterState.None:
            letter.style.backgroundColor = 'white';
            break;
          case LetterState.Yellow:
            letter.style.backgroundColor = 'yellow';
            break;
          case LetterState.Green:
            letter.style.backgroundColor = 'green';
            break;
          case LetterState.Grey:
            letter.style.backgroundColor = 'grey';
            break;
        }
      }
    }
  }
}
