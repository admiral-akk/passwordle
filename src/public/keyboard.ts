import {AddCharEvent, DeleteEvent, SubmitWordEvent} from './events';
import {LetterState} from './knowledge';

const KEYBOARD_KEYS = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['Del', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Enter'],
];

export class Keyboard {
  private registerKey(key: HTMLButtonElement) {
    this._keys[key.innerText] = key;
    this._knowledge[key.innerText] = LetterState.None;
    key.addEventListener('click', () => {
      const text = key.innerText;
      if (text === 'ENTER') {
        document.dispatchEvent(new SubmitWordEvent('hi'));
      } else if (text === 'DEL') {
        document.dispatchEvent(new DeleteEvent());
      } else {
        document.dispatchEvent(new AddCharEvent(text));
      }
    });
  }

  private ColorKey(key: HTMLButtonElement, state: LetterState) {
    switch (state) {
      case LetterState.None:
        key.style.backgroundColor = 'white';
        break;
      case LetterState.Yellow:
        key.style.backgroundColor = 'yellow';
        break;
      case LetterState.Green:
        key.style.backgroundColor = 'green';
        break;
      case LetterState.Grey:
        key.style.backgroundColor = 'grey';
        break;
    }
  }

  private UpdateKey(char: string, state: LetterState) {
    const currentState = this._knowledge[char];
    switch (state) {
      case LetterState.None:
      case LetterState.Grey:
        this._knowledge[char] = state;
        break;
      case LetterState.Yellow:
        if (currentState !== LetterState.Green) {
          this._knowledge[char] = state;
        }
        break;
      case LetterState.Green:
        this._knowledge[char] = state;
        break;
    }

    this.ColorKey(this._keys[char], this._knowledge[char]);
  }

  private _keys: Record<string, HTMLButtonElement>;
  private _knowledge: Record<string, LetterState>;

  constructor() {
    const keyboard = document.getElementById('keyboard');
    this._keys = {};
    this._knowledge = {};
    for (let i = 0; i < KEYBOARD_KEYS.length; i++) {
      const row = document.createElement('div');
      row.className = 'keyboard-row';
      for (let j = 0; j < KEYBOARD_KEYS[i].length; j++) {
        const key = document.createElement('button');
        key.className = 'keyboard-key';
        key.innerText = KEYBOARD_KEYS[i][j].toUpperCase();
        this.registerKey(key);
        row.appendChild(key);
      }
      keyboard?.appendChild(row);
    }
    this.registerKeyboardEvents();
    document.addEventListener('update_knowledge', e => {
      const knowledge: LetterState[] = e.detail.letterKnowledge;
      const guess: string = e.detail.guess;
      for (let i = 0; i < guess.length; i++) {
        this.UpdateKey(guess[i], knowledge[i]);
      }
    });
  }

  registerKeyboardEvents() {
    document.addEventListener('keyup', e => {
      const key = String(e.key).toUpperCase();
      if (key === 'BACKSPACE') {
        document.dispatchEvent(new DeleteEvent());
        return;
      }
      if (key === 'ENTER') {
        document.dispatchEvent(new SubmitWordEvent('hello'));
        return;
      }
      const keysPressed = key.match('[A-Z]+');
      if (!keysPressed || keysPressed[0].length > 1) {
        return;
      } else {
        document.dispatchEvent(new AddCharEvent(key));
        return;
      }
    });
  }
}
