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
    if (color !== LetterColor.White && color !== LetterColor.Grey) {
      AnimateCSS(this.root, AnimationType.Pulse);
    }
  }

  Reset(): void {
    this.ClearChar();
    this.SetColor(LetterColor.White);
  }
}
