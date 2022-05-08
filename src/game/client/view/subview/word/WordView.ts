import {LetterView} from './letter/LetterView';
import {Subview} from '../Subview';
import {ErrorType, LockedGuessError} from '../../../../network/updates/Updates';

const WORD_LENGTH = 5;

export abstract class BaseWordView extends Subview {
  protected letters: LetterView[];
  constructor(root: HTMLElement) {
    super(root, 'word');
    this.letters = [];
    for (let i = 0; i < WORD_LENGTH; i++) {
      const letter = new LetterView(this.root);
      this.letters.push(letter);
      this.AddSubview(letter);
    }
  }

  Reset(): void {
    this.letters.forEach(letter => letter.Reset());
  }

  LockedGuessError(error: LockedGuessError) {
    switch (error.type) {
      case ErrorType.NotValidWord:
        this.letters.forEach(letter => letter.Error());
        break;
      case ErrorType.TooShort:
        break;
    }
  }
}
