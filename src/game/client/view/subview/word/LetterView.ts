import {LetterState} from '../../../../logic/Knowledge';
import {CharUpdate} from '../../CharUpdate';
import {Subview} from '../Subview';

export class LetterView extends Subview {
  constructor(base: HTMLElement) {
    super(base, 'letter');
  }

  Update(update: CharUpdate) {
    this.root.innerText = update.char;
  }

  Set(char: string) {
    this.root.innerText = char;
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
    }
  }
}
