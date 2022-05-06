import {AnimateCSS, AnimationType} from '../../../Animate';
import {Subview} from '../../Subview';

export enum LetterColor {
  White = 'white',
  Yellow = 'yellow',
  Green = 'forestgreen',
  Grey = 'grey',
  LightGrey = 'lightgrey',
  Red = 'crimson',
}

export class LetterView extends Subview {
  constructor(base: HTMLElement) {
    super(base, 'letter');
  }

  SetChar(char: string) {
    this.root.innerText = char;
  }

  ClearChar() {
    this.root.innerText = '';
  }

  SetColor(color: LetterColor) {
    console.log(`setting color: ${color}`);
    this.root.style.backgroundColor = color;
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
  }

  Reset(): void {
    this.ClearChar();
    this.SetColor(LetterColor.White);
  }
}
