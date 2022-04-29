import {CharUpdate} from '../../CharUpdate';
import {Subview} from '../Subview';

export class LetterView extends Subview {
  constructor(base: HTMLElement) {
    super(base, 'letter');
  }

  Update(update: CharUpdate) {
    this.root.innerText = update.char;
  }

  Set(char: string) {
    this.root.innerText = char;
  }
}
