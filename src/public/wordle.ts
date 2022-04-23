import {WORDS} from './words.js';

const NUMBER_OF_GUESSES = 6;
const WORD_LENGTH = 5;

export class Wordle {
  public guesses: string[];
  public currentGuess: string;
  private _answer: string;
  constructor() {
    this.guesses = [];
    this.currentGuess = '';
    this._answer =
      WORDS[Math.floor(Math.random() * WORDS.length)].toUpperCase();
  }

  AddChar(c: string) {
    if (this.currentGuess.length >= WORD_LENGTH) {
      return;
    }
    this.currentGuess += c;
  }

  Delete() {
    if (this.currentGuess.length === 0) {
      return;
    }
    this.currentGuess = this.currentGuess.slice(0, -1);
  }

  Submit() {
    if (this.currentGuess.length !== WORD_LENGTH) {
      return;
    }
    console.log(`answer is: ${this._answer}`);
    console.log(`guess is: ${this._answer}`);
    if (this._answer === this.currentGuess) {
      console.log('guess is correct!');
    }
    this.guesses.push(this.currentGuess);
    this.currentGuess = '';
  }

  WordLength() {
    return WORD_LENGTH;
  }

  TotalGuesses() {
    return NUMBER_OF_GUESSES;
  }
}
