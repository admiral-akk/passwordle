import {LetterState} from '../../client/structs/LetterState';
import {OpponentUpdate, OpponentUpdateType} from '../OpponentUpdate';
import {Subview} from './Subview';
import {LetterColor} from './word/letter/LetterView';
import {BaseWordView} from './word/WordView';

export class OpponentBoardView extends Subview {
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
      case OpponentUpdateType.Submit:
        this.letters.forEach(letter => letter.SetColor(LetterColor.LightGrey));
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
