import {AddCharEvent, DeleteEvent, SubmitWordEvent} from './events';
import {LetterState} from './letter_state';

const KEYBOARD_KEYS = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['Del', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Enter'],
];

export class Keyboard {
  private registerKey(key: HTMLButtonElement) {
    this.keys.push(key);
    key.addEventListener('click', () => {
      const text = key.innerText;
      if (text === 'ENTER') {
        document.dispatchEvent(new SubmitWordEvent());
      } else if (text === 'DEL') {
        document.dispatchEvent(new DeleteEvent());
      } else {
        document.dispatchEvent(new AddCharEvent(text));
      }
    });
  }

  colorKey(key: HTMLButtonElement, state: LetterState) {
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

  private keys: HTMLButtonElement[];

  constructor() {
    const keyboard = document.getElementById('keyboard');
    this.keys = [];
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
    document.addEventListener('update_keyboard', e => {
      this.keys.forEach(b => {
        this.colorKey(b, e.detail.keyboardStates[b.innerText]);
      });
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
        document.dispatchEvent(new SubmitWordEvent());
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
