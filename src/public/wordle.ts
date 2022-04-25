import {WORDS} from './words.js';
import {LetterState} from './letter_state.js';
import {BoardUpdatedEvent, KeyboardUpdatedEvent} from './events.js';

const NUMBER_OF_GUESSES = 6;
const WORD_LENGTH = 5;

export class Wordle {
  public guesses: string[];
  public states: LetterState[][];
  public currentGuess: string;
  private _answer: string;
  public keyboardStates: Record<string, LetterState>;

  constructor() {
    this.guesses = [];
    this.currentGuess = '';
    this.states = this.InitStates();
    this.keyboardStates = this.InitKeyboardStates();
    this._answer =
      WORDS[Math.floor(Math.random() * WORDS.length)].toUpperCase();
    document.addEventListener('add_key', e => {
      this.AddChar(e.detail);
    });
    document.addEventListener('delete', () => {
      this.Delete();
    });
    document.addEventListener('submit', () => {
      this.Submit();
    });
  }

  InitStates() {
    const states: LetterState[][] = [];
    for (let i = 0; i < NUMBER_OF_GUESSES; i++) {
      const state: LetterState[] = [];
      for (let j = 0; j < WORD_LENGTH; j++) {
        state.push(LetterState.None);
      }
      states.push(state);
    }
    return states;
  }

  InitKeyboardStates(): Record<string, LetterState> {
    const keyboardStates: Record<string, LetterState> = {};
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(element => {
      keyboardStates[element] = LetterState.None;
    });
    return keyboardStates;
  }

  AddChar(char: string): void {
    if (this.currentGuess.length >= WORD_LENGTH) {
      console.log(`Character limit: ${this.currentGuess}`);
      return;
    }
    this.currentGuess += char;
    document.dispatchEvent(new BoardUpdatedEvent(this));
  }

  Delete() {
    if (this.currentGuess.length === 0) {
      console.log(`Nothing to delete: ${this.currentGuess}`);
      return;
    }
    this.currentGuess = this.currentGuess.slice(0, -1);
    document.dispatchEvent(new BoardUpdatedEvent(this));
  }

  UpdateKeyboardKnowledge(states: LetterState[], guess: string) {
    for (let i = 0; i < guess.length; i++) {
      const char = guess[i];
      if (this.keyboardStates[char] === LetterState.Green) {
        break;
      }
      switch (states[i]) {
        case LetterState.Green:
        case LetterState.Yellow:
          this.keyboardStates[char] = states[i];
          break;
        case LetterState.Grey:
          if (this.keyboardStates[char] === LetterState.None) {
            this.keyboardStates[char] = LetterState.Grey;
          }
          break;
        default:
          break;
      }
    }
    document.dispatchEvent(new KeyboardUpdatedEvent(this));
  }

  Submit() {
    if (this.currentGuess.length !== WORD_LENGTH) {
      console.log(`Too short: ${this.currentGuess}`);
      return;
    }
    if (!WORDS.includes(this.currentGuess.toLowerCase())) {
      console.log(`Invalid word: ${this.currentGuess}`);
      return;
    }
    const answer_state: LetterState[] = this.states[this.guesses.length];
    for (let i = 0; i < this.currentGuess.length; i++) {
      answer_state[i] = LetterState.None;
      if (this.currentGuess[i] === this._answer[i]) {
        answer_state[i] = LetterState.Green;
      }
      if (!this._answer.includes(this.currentGuess[i])) {
        answer_state[i] = LetterState.Grey;
      }
    }
    for (let i = 0; i < this.currentGuess.length; i++) {
      if (answer_state[i] !== LetterState.None) {
        continue;
      }
      let matched = 0;
      for (let j = 0; j < this.currentGuess.length; j++) {
        if (i === j) {
          continue;
        }
        if (
          answer_state[j] !== LetterState.Green &&
          answer_state[j] !== LetterState.Yellow
        ) {
          continue;
        }
        if (this.currentGuess[j] !== this.currentGuess[i]) {
          continue;
        }
        matched++;
      }
      const charCount = (
        this._answer.match(new RegExp(this.currentGuess[i], 'g')) || []
      ).length;
      if (charCount > matched) {
        answer_state[i] = LetterState.Yellow;
      } else {
        answer_state[i] = LetterState.Grey;
      }
    }

    this.UpdateKeyboardKnowledge(answer_state, this.currentGuess);

    this.guesses.push(this.currentGuess);

    console.log(`answer is: ${this._answer}`);
    console.log(`guess is: ${this.currentGuess}`);
    if (this._answer === this.currentGuess) {
      console.log('guess is correct!');
    }
    this.currentGuess = '';
    document.dispatchEvent(new BoardUpdatedEvent(this));
  }

  WordLength() {
    return WORD_LENGTH;
  }

  TotalGuesses() {
    return NUMBER_OF_GUESSES;
  }
}
