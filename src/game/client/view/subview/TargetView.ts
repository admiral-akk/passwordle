import {Subview} from './Subview';
import {LetterColor} from './word/letter/LetterView';
import {BaseWordView} from './word/WordView';

export class TargetView extends Subview {
  private answer: TargetWordView;
  constructor(base: HTMLElement) {
    super(base, 'target', 'Win if this is all green!');
    this.answer = new TargetWordView(this.root);
  }

  UpdateProgress(charIndex: number, char: string) {
    this.answer.UpdateProgress(charIndex, char);
  }
  Reset(): void {
    this.answer.Reset();
  }
}

class TargetWordView extends BaseWordView {
  public UpdateProgress(charIndex: number, char: string) {
    const letter = this.letters[charIndex];
    letter.SetChar(char);
    letter.SetColor(LetterColor.Green);
  }
}
