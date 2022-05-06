import {LetterView} from './letter/LetterView';
import {Subview} from '../Subview';

const WORD_LENGTH = 5;

export abstract class BaseWordView extends Subview {
  protected letters: LetterView[];
  constructor(root: HTMLElement) {
    super(root, 'word');
    this.letters = [];
    for (let i = 0; i < WORD_LENGTH; i++) {
      this.letters.push(new LetterView(this.root));
    }
  }

  Reset(): void {
    this.letters.forEach(letter => letter.Reset());
  }
}
