import {LetterState} from '../../structs/LetterState';
import {WordKnowledge} from '../../structs/WordKnowledge';
import {CharUpdate} from '../CharUpdate';
import {Subview} from './Subview';
import {LetterColor} from './word/letter/LetterView';
import {BaseWordView} from './word/WordView';

export class PlayerBoardView extends Subview {
  Reset() {
    this.words.forEach(word => word.Reset());
  }
  protected words: PlayerWordView[];
  constructor(base: HTMLDivElement, explanationText = '') {
    super(base, 'board', explanationText);
    this.words = [];
    for (let i = 0; i < 6; i++) {
      this.words.push(new PlayerWordView(this.root));
    }
  }

  AddGuessKnowledge(wordIndex: number, knowledge: WordKnowledge) {
    this.words[wordIndex].SetKnowledge(knowledge);
  }

  CharUpdate(update: CharUpdate) {
    this.words[update.wordIndex].AddChar(update.char, update.charIndex);
  }
}

class PlayerWordView extends BaseWordView {
  public AddChar(char: string, index: number) {
    this.letters[index].SetChar(char);
  }

  public SetKnowledge(knowledge: WordKnowledge) {
    for (let i = 0; i < this.letters.length; i++) {
      const letter = this.letters[i];
      letter.SetChar(knowledge.guess[i]);
      switch (knowledge.letterKnowledge[i]) {
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
}
