import {LetterState} from '../../structs/LetterState';
import { TargetProgress } from '../../structs/TargetProgress';
import {HintUpdate} from '../HintUpdate';
import {Subview} from './Subview';
import {WordView} from './word/WordView';

export class TargetView extends Subview {
  private answer: WordView;
  constructor(base: HTMLElement) {
    super(base, 'target');
    this.answer = new WordView(this.root);
  }

  HintUpdate(update: HintUpdate) {
    const knownCharacters = update.hint.opponentProgress.knownCharacters;
    for (let i = 0; i < knownCharacters.length; i++) {
      if (knownCharacters[i] !== '') {
        this.answer.SetChar(knownCharacters[i], i, LetterState.Green);
      }
    }
  }
}
