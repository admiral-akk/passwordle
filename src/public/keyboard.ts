const KEYBOARD_KEYS = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['Del', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Enter'],
];

export class Keyboard {
  private registerKey(key: HTMLButtonElement) {
    key.addEventListener('click', () => {
      let text = key.innerText;
      if (text === 'DEL') {
        text = 'Backspace';
      }
      document.dispatchEvent(new KeyboardEvent('keyup', {key: text}));
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
  }
}
