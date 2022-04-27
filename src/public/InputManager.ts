import {AddCharCommand, DeleteCommand, SubmitCommand} from './Events';

export class InputManager {
  constructor() {
    this.registerKeyboardEvents();
  }

  private registerKeyboardEvents() {
    document.addEventListener('keyup', e => {
      const key = String(e.key).toUpperCase();
      if (key === 'BACKSPACE') {
        document.dispatchEvent(new DeleteCommand());
        return;
      }
      if (key === 'ENTER') {
        document.dispatchEvent(new SubmitCommand());
        return;
      }
      const keysPressed = key.match('[A-Z]+');
      if (!keysPressed || key.length > 1) {
        return;
      } else {
        document.dispatchEvent(new AddCharCommand(key));
        return;
      }
    });
  }
}
