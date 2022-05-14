import {GuessLocked, LockedGuessError} from '../../network/Updates';
import {LetterState} from '../../../structs/LetterState';
import {CharUpdate} from '../CharUpdate';
import {Subview} from './Subview';
import {LetterColor} from './word/letter/LetterView';
import {BaseWordView} from './word/WordView';

export class YourBoardView extends Subview {
  protected words: PlayerWordView[];
  constructor(base: HTMLElement) {
    super(base, 'board', 'You');
    this.words = [];
    for (let i = 0; i < 6; i++) {
      const word = new PlayerWordView(this.root);
      this.words.push(word);
      this.AddSubview(word);
    }
  }

  Reset(): void {
    super.Reset();
    this.words.forEach(word => word.Reset());
  }

  SetCharKnowledge(
    wordIndex: number,
    charIndex: number,
    char: string,
    knowledge: LetterState
  ) {
    this.words[wordIndex].SetKnowledge(charIndex, char, knowledge);
  }

  CharUpdate(update: CharUpdate) {
    this.words[update.wordIndex].AddChar(update.char, update.charIndex);
  }

  SubmitError(error: LockedGuessError) {
    this.words[error.wordIndex].LockedGuessError(error);
  }

  GuessLocked(update: GuessLocked) {
    this.words[update.index].GuessLocked();
  }
}

class PlayerWordView extends BaseWordView {
  public AddChar(char: string, index: number) {
    this.letters[index].SetChar(char);
  }

  public SetKnowledge(charIndex: number, char: string, knowledge: LetterState) {
    const letter = this.letters[charIndex];
    letter.SetChar(char);
    switch (knowledge) {
      case LetterState.NoKnowledge:
        letter.SetColor(LetterColor.White);
        break;
      case LetterState.NotInWord:
        letter.SetColor(LetterColor.Grey);
        break;
      case LetterState.Correct:
        letter.SetColor(LetterColor.Green);
        break;
      case LetterState.WrongPosition:
        letter.SetColor(LetterColor.Yellow);
        break;
    }
  }

  public GuessLocked() {
    this.letters.forEach(letter => {
      letter.SetColor(LetterColor.LightGrey);
    });
  }
}
