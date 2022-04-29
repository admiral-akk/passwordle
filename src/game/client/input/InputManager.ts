export class InputManager {
  private addChar: (char: string) => void;
  private deleteChar: () => void;
  private submitWord: () => void;
  constructor(
    addChar: (char: string) => void,
    deleteChar: () => void,
    submitWord: () => void
  ) {
    this.addChar = addChar;
    this.deleteChar = deleteChar;
    this.submitWord = submitWord;
    this.registerKeyboardEvents();
  }

  private registerKeyboardEvents() {
    document.addEventListener('keyup', e => {
      const key = String(e.key).toUpperCase();
      if (key === 'BACKSPACE') {
        this.deleteChar();
        return;
      }
      if (key === 'ENTER') {
        this.submitWord();
        return;
      }
      const keysPressed = key.match('[A-Z]+');
      if (!keysPressed || key.length > 1) {
        return;
      } else {
        this.addChar(key);
        return;
      }
    });
  }
}
