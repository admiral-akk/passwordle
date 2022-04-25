import {SubmitWordEvent} from './events';
import {LetterState, WordKnowledge} from './knowledge';
import {WORDS} from './words';

export class Board {
  private _letterBoxes: HTMLDivElement[][];

  private _guesses: string[];
  private _knowledge: WordKnowledge[];
  private _currentGuess: string;
  private _wordLength: number;

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

    document.addEventListener('update_knowledge', e => {
      this.UpdateKnowledge(e.detail);
    });

    this._guesses = [];
    this._knowledge = [];
    this._currentGuess = '';
    this._wordLength = wordLength;
    document.addEventListener('add_key', e => {
      this.AddChar(e.detail);
    });
    document.addEventListener('delete', () => {
      this.Delete();
    });
    document.addEventListener('submit_command', () => {
      this.Submit();
    });
    document.addEventListener('new_game', () => {
      this.NewGame();
    });
  }

  private NewGame() {
    this._letterBoxes.forEach(row => {
      row.forEach(letter => {
        letter.innerText = '';
        this.UpdateColor(letter, LetterState.None);
      });
    });
  }

  private PreviousRow(): HTMLDivElement[] {
    return this._letterBoxes[this._guesses.length - 1];
  }
  private CurrentRow(): HTMLDivElement[] {
    return this._letterBoxes[this._guesses.length];
  }

  private CurrentLetter(): HTMLDivElement {
    const row = this.CurrentRow();
    return row[this._currentGuess.length];
  }

  private LastLetter(): HTMLDivElement {
    const row = this.CurrentRow();
    return row[this._currentGuess.length - 1];
  }

  AddChar(char: string) {
    if (this._currentGuess.length >= this._wordLength) {
      console.log(`Character limit: ${this._currentGuess}`);
      return;
    }
    const letter = this.CurrentLetter();
    letter.innerText = char;
    this._currentGuess += char;
  }

  Delete() {
    if (this._currentGuess.length === 0) {
      console.log(`Nothing to delete: ${this._currentGuess}`);
      return;
    }
    const letter = this.LastLetter();
    letter.innerText = '';
    this._currentGuess = this._currentGuess.slice(0, -1);
  }

  Submit() {
    if (this._currentGuess.length !== this._wordLength) {
      console.log(`Too short: ${this._currentGuess}`);
      return;
    }
    if (!WORDS.includes(this._currentGuess.toLowerCase())) {
      console.log(`Invalid word: ${this._currentGuess}`);
      return;
    }
    this._guesses.push(this._currentGuess);
    document.dispatchEvent(new SubmitWordEvent(this._currentGuess));
    this._currentGuess = '';
  }

  private UpdateColor(letter: HTMLDivElement, knowledge: LetterState) {
    switch (knowledge) {
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

  UpdateKnowledge(knowledge: WordKnowledge) {
    const row = this.PreviousRow();
    for (
      let letter_index = 0;
      letter_index < this._wordLength;
      letter_index++
    ) {
      const letter = row[letter_index];
      const letterKnowledge = knowledge.letterKnowledge[letter_index];
      this.UpdateColor(letter, letterKnowledge);
    }
  }
}
