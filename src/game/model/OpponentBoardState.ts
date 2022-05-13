import {WordKnowledge} from '../../structs/WordKnowledge';
import {OpponentUpdate, OpponentUpdateType} from './OpponentUpdate';
import {OpponentBoardView} from './view/OpponentBoardView';
import {ToWord, Word} from '../../structs/Word';
import {LetterAnimation} from './view/struct/Animation';
import {ModelState} from './ModelState';

export class OpponentBoardState extends ModelState<OpponentBoardView> {
  private guesses: Word[] = [];
  private opponentCharCount = 0;

  OpponentAddedChar() {
    const update = new OpponentUpdate(
      OpponentUpdateType.AddChar,
      this.guesses.length,
      this.opponentCharCount
    );
    this.view?.OpponentUpdate(update);
    this.opponentCharCount++;
  }
  OpponentDeleted() {
    this.opponentCharCount--;
    const update = new OpponentUpdate(
      OpponentUpdateType.Delete,
      this.guesses.length,
      this.opponentCharCount
    );
    this.view?.OpponentUpdate(update);
  }
  OpponentLockedGuess() {
    this.opponentCharCount = 0;
    const update = new OpponentUpdate(
      OpponentUpdateType.Submit,
      this.guesses.length,
      this.opponentCharCount
    );
    this.view?.OpponentUpdate(update);
  }

  Update(knowledge: WordKnowledge): LetterAnimation[] {
    this.guesses.push(ToWord(knowledge.guess));
    const animations: LetterAnimation[] = [];
    for (let i = 0; i < knowledge.guess.length; i++) {
      animations.push(
        new LetterAnimation(i + 5, () =>
          this.view?.SetCharKnowledge(
            this.guesses.length - 1,
            i,
            knowledge.guess[i],
            knowledge.letterKnowledge[i]
          )
        )
      );
    }
    return animations;
  }
}
