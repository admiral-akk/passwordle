import {LetterView} from './LetterView';
import {Subview} from '../Subview';
import {CharUpdate} from '../../CharUpdate';
import {WordKnowledge} from '../../../../logic/Knowledge';

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
  Set(word: string) {
    for (let i = 0; i < WORD_LENGTH; i++) {
      this.letters[i].Set(word[i]);
    }
  }

  SetKnowledge(knowledge: WordKnowledge) {
    this.Set(knowledge.guess);
    for (let i = 0; i < WORD_LENGTH; i++) {
      this.letters[i].SetKnowledge(knowledge.letterKnowledge[i]);
    }
  }

  Update(update: CharUpdate) {
    this.letters[update.charIndex].Update(update);
  }
  SetChar(char: string, charIndex: number) {
    this.letters[charIndex].Set(char);
  }
}
