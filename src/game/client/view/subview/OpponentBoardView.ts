import {LetterState} from '../../structs/LetterState';
import {OpponentUpdate, OpponentUpdateType} from '../OpponentUpdate';
import {BoardView} from './BoardView';
import {Subview} from './Subview';
import {LetterColor} from './word/letter/LetterView';
import {BaseWordView} from './word/WordView';

export class OpponentBoardView extends Subview implements BoardView {
  protected words: OpponentWordView[];
  constructor() {
    const base = document.getElementById('opponent')!;
    super(base, 'board', 'Opponent Guesses');
    this.words = [];
    for (let i = 0; i < 6; i++) {
      const word = new OpponentWordView(this.root);
      this.words.push(word);
      this.AddSubview(word);
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

  OpponentUpdate(update: OpponentUpdate) {
    this.words[update.wordIndex].OpponentUpdate(update.type, update.charIndex);
  }

  Reset() {
    this.words.forEach(word => word.Reset());
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
