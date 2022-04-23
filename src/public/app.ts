import {Board} from './board.js';
import {Keyboard} from './keyboard.js';
import {Wordle} from './wordle.js';

const wordle = new Wordle();
const board = new Board(wordle.TotalGuesses(), wordle.WordLength());
const keyboard = new Keyboard();

function registerKeyboard() {
  document.addEventListener('keyup', e => {
    const key = String(e.key).toUpperCase();
    if (key === 'BACKSPACE') {
      wordle.Delete();
      board.Update(wordle.guesses, wordle.currentGuess);
      return;
    }
    if (key === 'ENTER') {
      wordle.Submit();
      board.Update(wordle.guesses, wordle.currentGuess);
      return;
    }
    const keysPressed = key.match('[A-Z]+');
    if (!keysPressed || keysPressed[0].length > 1) {
      return;
    } else {
      wordle.AddChar(key);
      board.Update(wordle.guesses, wordle.currentGuess);
      return;
    }
  });
}

registerKeyboard();
