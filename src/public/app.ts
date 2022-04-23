import {InitKeyboard} from './keyboard.js';
import {Wordle} from './wordle.js';

const wordle = new Wordle();

function initBoard() {
  const gameboard = document.getElementById('game-board');
  for (let i = 0; i < wordle.TotalGuesses(); i++) {
    const row = document.createElement('div');
    row.className = 'letter-row';
    for (let j = 0; j < wordle.WordLength(); j++) {
      const box = document.createElement('div');
      box.className = 'letter-box';
      row.appendChild(box);
    }
    gameboard?.appendChild(row);
  }
}

function UpdateBoard() {
  const gameboard = document.getElementById('game-board');
  const rows = gameboard?.getElementsByClassName('letter-row');
  for (let row_index = 0; row_index < wordle.TotalGuesses(); row_index++) {
    const row = rows?.item(row_index);
    const letters = row?.getElementsByClassName('letter-box');
    for (
      let letter_index = 0;
      letter_index < wordle.WordLength();
      letter_index++
    ) {
      const letter = letters?.item(letter_index) as HTMLDivElement;
      if (row_index > wordle.guesses.length) {
        letter.innerText = '';
      } else if (row_index < wordle.guesses.length) {
        letter.innerText = wordle.guesses[row_index][letter_index];
      } else if (letter_index < wordle.currentGuess.length) {
        letter.innerText = wordle.currentGuess[letter_index];
      } else {
        letter.innerText = '';
      }
    }
  }
}

function registerKeyboard() {
  document.addEventListener('keyup', e => {
    const key = String(e.key).toUpperCase();
    if (key === 'BACKSPACE') {
      wordle.Delete();
      UpdateBoard();
      console.log(`Key pressed: ${key}`);
      return;
    }
    if (key === 'ENTER') {
      wordle.Submit();
      UpdateBoard();
      console.log(`Key pressed: ${key}`);
      return;
    }
    const keysPressed = key.match('[A-Z]+');
    if (!keysPressed || keysPressed[0].length > 1) {
      return;
    } else {
      wordle.AddChar(key);
      UpdateBoard();
      console.log(`Key pressed: ${key}`);
      return;
    }
  });
}

initBoard();
InitKeyboard();
registerKeyboard();
