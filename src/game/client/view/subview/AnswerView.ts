import {LetterState} from '../../structs/LetterState';
import {HintUpdate} from '../HintUpdate';
import {Subview} from './Subview';
import {WordView} from './word/WordView';

export class AnswerView extends Subview {
  private answer: WordView;
  constructor(base: HTMLElement) {
    super(base, 'answer', 'Lose if this is filled!');
    this.answer = new WordView(this.root);
  }

  SetSecret(secret: string) {
    this.answer.Set(secret);
  }

  Reset(): void {
    this.answer.Reset();
  }

  HintUpdate(update: HintUpdate) {
    const knownCharacters = update.hint.playerProgress.knownCharacters;
    for (let i = 0; i < knownCharacters.length; i++) {
      if (knownCharacters[i] !== '') {
        this.answer.SetChar(knownCharacters[i], i, LetterState.Red);
      }
    }
  }
}
