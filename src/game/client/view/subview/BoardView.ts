import {WordKnowledge} from '../../structs/WordKnowledge';
import {CharUpdate} from '../CharUpdate';
import {Subview} from './Subview';
import {WordView} from './word/WordView';

const WORD_COUNT = 6;

export abstract class BoardView extends Subview {
  protected words: WordView[];
  constructor(base: HTMLDivElement, explanationText = '') {
    super(base, 'board', explanationText);
    this.words = [];
    for (let i = 0; i < WORD_COUNT; i++) {
      this.words.push(new WordView(this.root));
    }
  }

  protected BaseUpdate(update: CharUpdate) {
    this.words[update.wordIndex].Update(update);
  }

  protected BaseHintUpdate(knowledge: WordKnowledge, index: number) {
    this.words[index].SetKnowledge(knowledge);
  }

  Reset() {
    this.words.forEach(word => word.Reset());
  }
}
