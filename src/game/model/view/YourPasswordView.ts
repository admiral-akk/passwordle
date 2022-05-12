import {TargetProgress} from '../../client/structs/TargetProgress';
import {LetterAnimation} from './struct/Animation';
import {Subview} from './Subview';
import {LetterColor} from './word/letter/LetterView';
import {BaseWordView} from './word/WordView';

export class YourPasswordView extends Subview {
  private answer: AnswerWordView;
  constructor(base: HTMLElement) {
    super(base, 'answer', 'Your Password', 'If these are all red, you lose!');
    this.answer = new AnswerWordView(this.root);
    this.AddSubview(this.answer);
  }

  SetSecret(secret: string) {
    this.answer.SetSecret(secret);
  }

  Update(target: TargetProgress, playerGuess: string): LetterAnimation[] {
    const animations: LetterAnimation[] = [];
    for (let i = 0; i < target.knownCharacters.length; i++) {
      if (target.knownCharacters[i] === '') {
        continue;
      }
      const animation = this.answer.UpdateProgress(i);
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
