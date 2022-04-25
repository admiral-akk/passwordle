import {Board} from './board.js';
import {Keyboard} from './keyboard.js';
import {Wordle} from './wordle.js';

const wordle = new Wordle();
const board = new Board(wordle.TotalGuesses(), wordle.WordLength());
const keyboard = new Keyboard();
