import {TargetProgress} from '../../../structs/TargetProgress';
import {LetterAnimation} from './struct/Animation';
import {Subview} from './Subview';
import {LetterColor} from './word/letter/LetterView';
import {BaseWordView} from './word/WordView';

export class OpponentPasswordView extends Subview {
  private answer: TargetWordView;
  constructor(base: HTMLElement) {
    super(
      base,
      'target',
      "Opponent's Password",
      'If these are all green, you win!'
    );
    this.answer = new TargetWordView(this.root);
    this.AddSubview(this.answer);
  }

  Update(target: TargetProgress, playerGuess: string): LetterAnimation[] {
    const animations: LetterAnimation[] = [];
    for (let i = 0; i < target.knownCharacters.length; i++) {
      if (target.knownCharacters[i] === '') {
        continue;
      }
      const animation = this.answer.UpdateProgress(
        i,
        target.knownCharacters[i]
      );
      if (animation) {
        if (playerGuess[i] === target.knownCharacters[i]) {
          animations.push(new LetterAnimation(i, animation));
        } else {
          animations.push(new LetterAnimation(i + 5, animation));
        }
      }
    }
    return animations;
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
