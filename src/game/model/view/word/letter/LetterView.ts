import {AnimateCSS, AnimationType} from '../../Animate';
import {Subview} from '../../Subview';

export enum LetterColor {
  White = 'white',
  Yellow = '#c9b458',
  Green = '#2e7d32',
  Grey = 'grey',
  LightGrey = 'lightgrey',
  Red = 'crimson',
}

export class LetterView extends Subview {
  private color: LetterColor = LetterColor.White;
  constructor(base: HTMLElement) {
    super(base, 'letter');
  }

  Error() {
    AnimateCSS(this.root, AnimationType.ShakeY);
  }

  SetChar(char: string) {
    this.root.innerText = char;
  }

  ClearChar() {
    this.root.innerText = '';
  }

  Color(): LetterColor {
    return this.color;
  }

  SetColor(color: LetterColor) {
    this.root.style.backgroundColor = color;
    this.color = color;
    switch (color) {
      default:
        break;
      case LetterColor.Green:
      case LetterColor.Yellow:
        AnimateCSS(this.root, AnimationType.FlipInX, 0.5);
        break;
      case LetterColor.Red:
        AnimateCSS(this.root, AnimationType.HeartBeat, 0.5);
        break;
      case LetterColor.LightGrey:
        AnimateCSS(this.root, AnimationType.BounceIn, 0.5);
        break;
    }
    switch (color) {
      case LetterColor.Green:
      case LetterColor.LightGrey:
      case LetterColor.Red:
      case LetterColor.Yellow:
      case LetterColor.Grey:
        this.root.style.borderColor = color;
        break;
      case LetterColor.White:
        this.root.style.borderColor = LetterColor.Grey;
        break;
    }
  }

  Reset(): void {
    this.ClearChar();
    this.SetColor(LetterColor.White);
  }
}
