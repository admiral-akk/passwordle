import {WORDS} from './words.js';
import {InitKeyboard} from './keyboard.js';
const NUMBER_OF_GUESSES = 6;
const WORD_LENGTH = 5;

const answer = WORDS[Math.floor(Math.random() * WORDS.length)].toUpperCase();

let guessesRemaining = NUMBER_OF_GUESSES;
let currentGuess = '';

function initBoard() {
  const gameboard = document.getElementById('game-board');
  for (let i = 0; i < NUMBER_OF_GUESSES; i++) {
    const row = document.createElement('div');
    row.className = 'letter-row';
    for (let j = 0; j < WORD_LENGTH; j++) {
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
  const row = rows?.item(NUMBER_OF_GUESSES - guessesRemaining);
  const letters = row?.getElementsByClassName('letter-box');
  for (let i = 0; i < WORD_LENGTH; i++) {
    const letter = letters?.item(i) as HTMLDivElement;
    if (i >= currentGuess.length) {
      letter.innerText = '';
    } else {
      letter.innerText = currentGuess[i];
    }
  }
}

function AddChar(c: string) {
  if (currentGuess.length < WORD_LENGTH) {
    currentGuess += c;
    UpdateBoard();
  }
}

function Delete() {
  if (currentGuess.length > 0) {
    currentGuess = currentGuess.slice(0, -1);
    UpdateBoard();
  }
}

function Submit() {
  if (currentGuess.length === WORD_LENGTH) {
    console.log(`answer is: ${answer}`);
    console.log(`guess is: ${currentGuess}`);
    if (answer === currentGuess) {
      console.log('guess is correct!');
    }
    currentGuess = '';
    guessesRemaining--;
    UpdateBoard();
  }
}

function registerKeyboard() {
  document.addEventListener('keyup', e => {
    const key = String(e.key).toUpperCase();
    if (key === 'BACKSPACE') {
      Delete();
      console.log(`Key pressed: ${key}`);
      return;
    }
    if (key === 'ENTER') {
      Submit();
      console.log(`Key pressed: ${key}`);
      return;
    }
    const keysPressed = key.match('[A-Z]+');
    if (!keysPressed || keysPressed[0].length > 1) {
      return;
    } else {
      AddChar(key);
      console.log(`Key pressed: ${key}`);
      return;
    }
  });
}

initBoard();
InitKeyboard();
registerKeyboard();
