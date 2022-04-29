import {LetterView} from './LetterView';
import {Subview} from '../Subview';

const WORD_LENGTH = 5;

export class WordView extends Subview {
  private letters: LetterView[];
  constructor(root: HTMLElement) {
    super(root, 'word');
    this.letters = [];
    for (let i = 0; i < WORD_LENGTH; i++) {
      this.letters.push(new LetterView(this.root));
    }
  }
}
