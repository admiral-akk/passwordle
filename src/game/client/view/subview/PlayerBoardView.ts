import {LetterState} from '../../structs/LetterState';
import {CharUpdate} from '../CharUpdate';
import {BoardView} from './BoardView';
import {Subview} from './Subview';
import {LetterColor} from './word/letter/LetterView';
import {BaseWordView} from './word/WordView';

export class YourBoardView extends Subview implements BoardView {
  Reset() {
    this.words.forEach(word => word.Reset());
  }
  protected words: PlayerWordView[];
  constructor(base: HTMLDivElement, explanationText = 'Your Guesses') {
    super(base, 'board', explanationText);
    this.words = [];
    for (let i = 0; i < 6; i++) {
      this.words.push(new PlayerWordView(this.root));
    }
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
}
