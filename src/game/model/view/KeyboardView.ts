import {LetterState} from '../../client/structs/LetterState';
import {AnimateCSS, AnimationType} from './Animate';
import {Subview} from './Subview';
import {LetterColor} from './word/letter/LetterView';

const KEYS = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['ENT', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'DEL'],
];

export class KeyboardView extends Subview {
  constructor(base: HTMLElement) {
    super(base, 'keyboard');
  }
  private keys: Record<string, HTMLButtonElement> = {};

  Initialize(input: (key: string) => void): void {
    KEYS.forEach(row => {
      const rowElement = this.AddDiv(this.root, 'keyboard-row');
      row.forEach(key => {
        key = key.toUpperCase();
        this.keys[key] = this.AddButton(rowElement, 'keyboard-key', key, () =>
          input(key)
        );
        if (key === 'ENT' || key === 'DEL') {
          this.keys[key].classList.add('keyboard-command-key');
        }
      });
    });
  }

  SetColor(key: string, state: LetterState) {
    key = key.toUpperCase();
    const color = ToColor(state);
    const element = this.keys[key];
    element.style.backgroundColor = color;
    switch (color) {
      default:
        break;
      case LetterColor.Green:
      case LetterColor.Yellow:
      case LetterColor.Grey:
        AnimateCSS(element, AnimationType.Pulse, 0.5);
        break;
    }
  }
}

function ToColor(state: LetterState): LetterColor {
  switch (state) {
    case LetterState.Correct:
      return LetterColor.Green;
    case LetterState.NoKnowledge:
      return LetterColor.LightGrey;
    case LetterState.NotInWord:
      return LetterColor.Grey;
    case LetterState.WrongPosition:
      return LetterColor.Yellow;
  }
}
