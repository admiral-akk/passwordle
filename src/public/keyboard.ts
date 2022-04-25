import {AddCharEvent, DeleteEvent, SubmitWordEvent} from './events';

const KEYBOARD_KEYS = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['Del', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Enter'],
];

export class Keyboard {
  private registerKey(key: HTMLButtonElement) {
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

  constructor() {
    const keyboard = document.getElementById('keyboard');
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
    this.registerKeyboard();
  }

  registerKeyboard() {
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
