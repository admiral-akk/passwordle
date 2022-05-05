import {LetterState} from '../../../structs/LetterState';
import {AnimateCSS, AnimationType} from '../../Animate';
import {CharUpdate} from '../../CharUpdate';
import {Subview} from '../Subview';

export class LetterView extends Subview {
  constructor(base: HTMLElement) {
    super(base, 'letter');
  }

  Update(update: CharUpdate) {
    this.Set(update.char);
  }

  Set(char: string) {
    this.root.innerText = char;
    if (char !== '') {
      AnimateCSS(this.root, AnimationType.Pulse);
    }
  }

  SetKnowledge(letterKnowledge: LetterState) {
    console.log(`setting color: ${letterKnowledge}`);
    switch (letterKnowledge) {
      case LetterState.None:
        this.root.style.backgroundColor = 'white';
        break;
      case LetterState.Yellow:
        this.root.style.backgroundColor = 'yellow';
        break;
      case LetterState.Green:
        this.root.style.backgroundColor = 'green';
        break;
      case LetterState.Grey:
        this.root.style.backgroundColor = 'grey';
        break;
      case LetterState.LightGrey:
        this.root.style.backgroundColor = 'lightgrey';
        AnimateCSS(this.root, AnimationType.Pulse);
        break;
      case LetterState.Red:
        this.root.style.backgroundColor = 'red';
        break;
    }
  }
  Reset(): void {
    this.Set('');
    this.SetKnowledge(LetterState.None);
  }
}
