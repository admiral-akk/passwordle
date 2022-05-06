import {TargetProgress} from '../../structs/TargetProgress';
import {Subview} from './Subview';
import {LetterColor} from './word/letter/LetterView';
import {BaseWordView} from './word/WordView';

export class TargetView extends Subview {
  private answer: TargetWordView;
  constructor(base: HTMLElement) {
    super(base, 'target', 'Fill this word to win!');
    this.answer = new TargetWordView(this.root);
  }

  UpdateProgress(progress: TargetProgress) {
    const knownCharacters = progress.knownCharacters;
    for (let i = 0; i < knownCharacters.length; i++) {
      if (knownCharacters[i] !== '') {
        this.answer.UpdateProgress(i, knownCharacters[i]);
      }
    }
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
