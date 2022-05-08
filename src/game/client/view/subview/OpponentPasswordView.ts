import {TargetProgress} from '../../structs/TargetProgress';
import {PasswordView} from './PasswordView';
import {Subview} from './Subview';
import {LetterColor} from './word/letter/LetterView';
import {BaseWordView} from './word/WordView';

export class OpponentPasswordView extends Subview implements PasswordView {
  private answer: TargetWordView;
  constructor(base: HTMLElement) {
    super(base, 'target', "Opponent's Password");
    this.answer = new TargetWordView(this.root);
    this.AddSubview(this.answer);
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
      animations.push(this.answer.UpdateProgress(i, target.knownCharacters[i]));
    }
    return animations;
  }
  Reset(): void {
    this.answer.Reset();
  }
}

class TargetWordView extends BaseWordView {
  public UpdateProgress(charIndex: number, char: string): (() => void) | null {
    const letter = this.letters[charIndex];
    if (letter.Color() !== LetterColor.Green) {
      return () => {
        letter.SetChar(char);
        letter.SetColor(LetterColor.Green);
      };
    } else {
      return null;
    }
  }
}
