import {TargetProgress} from '../../structs/TargetProgress';
import {PasswordView} from './PasswordView';
import {Subview} from './Subview';
import {LetterColor} from './word/letter/LetterView';
import {BaseWordView} from './word/WordView';
export class AnswerView extends Subview implements PasswordView {
  private answer: AnswerWordView;
  constructor(base: HTMLElement) {
    super(base, 'answer', 'Your Password');
    this.answer = new AnswerWordView(this.root);
  }

  SetSecret(secret: string) {
    this.answer.SetSecret(secret);
  }

  Reset(): void {
    this.answer.Reset();
  }

  GetAnimations(
    guess: string,
    target: TargetProgress
  ): ((() => void) | null)[] {
    const animations: ((() => void) | null)[] = [];
    for (let i = 0; i < target.knownCharacters.length; i++) {
      if (target.knownCharacters[i] === '') {
        animations.push(null);
        continue;
      }
      if (target.knownCharacters[i] !== guess[i]) {
        animations.push(null);
        continue;
      }
      animations.push(this.answer.UpdateProgress(i));
    }
    return animations;
  }
}

class AnswerWordView extends BaseWordView {
  public SetSecret(secret: string) {
    for (let i = 0; i < secret.length; i++) {
      this.letters[i].SetChar(secret[i]);
    }
  }

  public UpdateProgress(charIndex: number): (() => void) | null {
    const letter = this.letters[charIndex];
    if (letter.Color() !== LetterColor.Red) {
      return () => {
        letter.SetColor(LetterColor.Red);
      };
    } else {
      return null;
    }
  }
}
