import {CharUpdate} from '../CharUpdate';
import {Subview} from './Subview';
import {WordView} from './word/WordView';

const WORD_COUNT = 6;

export abstract class BoardView extends Subview {
  private words: WordView[];
  constructor(base: HTMLDivElement) {
    super(base, 'board');
    this.words = [];
    for (let i = 0; i < WORD_COUNT; i++) {
      this.words.push(new WordView(this.root));
    }
  }

  protected BaseUpdate(update: CharUpdate) {
    this.words[update.wordIndex].Update(update);
  }
}
