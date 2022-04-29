import {Subview} from './Subview';
import {WordView} from './word/WordView';

export class AnswerView extends Subview {
  private answer: WordView;
  constructor(base: HTMLElement) {
    super(base, 'answer');
    this.answer = new WordView(this.root);
  }

  SetSecret(secret: string) {
    this.answer.Set(secret);
  }
}
