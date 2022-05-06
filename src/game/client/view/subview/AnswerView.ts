import {HintUpdate} from '../HintUpdate';
import {Subview} from './Subview';
import {LetterColor} from './word/letter/LetterView';
import {BaseWordView} from './word/WordView';
export class AnswerView extends Subview {
  private answer: AnswerWordView;
  constructor(base: HTMLElement) {
    super(base, 'answer', 'Lose if this is filled!');
    this.answer = new AnswerWordView(this.root);
  }

  SetSecret(secret: string) {
    this.answer.SetSecret(secret);
  }

  Reset(): void {
    this.answer.Reset();
  }

  HintUpdate(update: HintUpdate) {
    const knownCharacters = update.hint.playerProgress.knownCharacters;
    for (let i = 0; i < knownCharacters.length; i++) {
      if (knownCharacters[i] !== '') {
        this.answer.UpdateProgress(i);
      }
    }
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
