import {Subview} from '../Subview';

export class LetterView extends Subview {
  constructor(base: HTMLElement) {
    super(base, 'letter');
  }

  Set(char: string) {
    this.root.innerText = char;
  }
}
