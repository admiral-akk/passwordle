import {LetterState} from '../../structs/LetterState';
import {WordKnowledge} from '../../structs/WordKnowledge';
import {OpponentUpdate, OpponentUpdateType} from '../OpponentUpdate';
import {Subview} from './Subview';
import {LetterColor} from './word/letter/LetterView';
import {BaseWordView} from './word/WordView';

export class OpponentBoardView extends Subview {
  protected words: OpponentWordView[];
  constructor(base: HTMLDivElement, explanationText = '') {
    super(base, 'board', explanationText);
    this.words = [];
    for (let i = 0; i < 6; i++) {
      this.words.push(new OpponentWordView(this.root));
    }
  }

  OpponentUpdate(update: OpponentUpdate) {
    this.words[update.wordIndex].OpponentUpdate(update.type, update.charIndex);
  }

  Reset() {
    this.words.forEach(word => word.Reset());
  }

  AddGuess(wordIndex: number, guess: WordKnowledge) {
    this.words[wordIndex].SetKnowledge(guess);
  }
}

class OpponentWordView extends BaseWordView {
  public OpponentUpdate(type: OpponentUpdateType, charIndex: number) {
    switch (type) {
      case OpponentUpdateType.AddChar:
        this.letters[charIndex].SetColor(LetterColor.LightGrey);
        break;
      case OpponentUpdateType.Delete:
        this.letters[charIndex].SetColor(LetterColor.White);
        break;
    }
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
