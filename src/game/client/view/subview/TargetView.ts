import {Subview} from './Subview';
import {WordView} from './word/WordView';

export class TargetView extends Subview {
  private answer: WordView;
  constructor(base: HTMLElement) {
    super(base, 'target');
    this.answer = new WordView(this.root);
  }
}
