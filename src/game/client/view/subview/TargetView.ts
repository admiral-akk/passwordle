import {LetterState} from '../../../logic/Knowledge';
import {HintUpdate} from '../HintUpdate';
import {Subview} from './Subview';
import {WordView} from './word/WordView';

export class TargetView extends Subview {
  private answer: WordView;
  constructor(base: HTMLElement) {
    super(base, 'target');
    this.answer = new WordView(this.root);
  }

  private Update(guess: string, knowledge: LetterState[]) {
    for (let i = 0; i < guess.length; i++) {
      if (knowledge[i] === LetterState.Green) {
        this.answer.SetChar(guess[i], i, LetterState.Green);
      }
    }
  }

  HintUpdate(update: HintUpdate) {
    this.Update(
      update.opponentKnowledge.guess,
      update.opponentKnowledge.letterKnowledge
    );
    this.Update(
      update.playerKnowledge.guess,
      update.playerKnowledge.letterKnowledge
    );
  }
}
