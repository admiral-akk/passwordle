import {Subview} from './Subview';
import {LetterColor} from './word/letter/LetterView';
import {BaseWordView} from './word/WordView';
export class AnswerView extends Subview {
  private answer: AnswerWordView;
  constructor(base: HTMLElement) {
    super(base, 'answer', 'Lose if this is all red!');
    this.answer = new AnswerWordView(this.root);
  }

  SetSecret(secret: string) {
    this.answer.SetSecret(secret);
  }

  Reset(): void {
    this.answer.Reset();
  }

  UpdateProgress(charIndex: number) {
    this.answer.UpdateProgress(charIndex);
  }
}

class AnswerWordView extends BaseWordView {
  public SetSecret(secret: string) {
    for (let i = 0; i < secret.length; i++) {
      this.letters[i].SetChar(secret[i]);
    }
  }

  public UpdateProgress(charIndex: number) {
    this.letters[charIndex].SetColor(LetterColor.Red);
  }
}
