import {WordKnowledge} from '../../structs/WordKnowledge';
import {OpponentUpdate, OpponentUpdateType} from './OpponentUpdate';
import {OpponentBoardView} from './view/OpponentBoardView';
import {ToWord, Word} from '../../structs/Word';
import {LetterAnimation} from './view/struct/Animation';
import {ModelState} from './ModelState';

enum State {
  Guessing,
  Waiting,
}

export class OpponentBoardState extends ModelState<OpponentBoardView> {
  private guesses: Word[] = [];
  private opponentCharCount = 0;
  private state: State = State.Guessing;

  Reset(): void {
    super.Reset();
    this.guesses = [];
    this.opponentCharCount = 0;
  }
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
    this.state = State.Waiting;
    this.opponentCharCount = 0;
    const update = new OpponentUpdate(
      OpponentUpdateType.Submit,
      this.guesses.length,
      this.opponentCharCount
    );
    this.view?.OpponentUpdate(update);
  }

  Submitted() {
    return this.state === State.Waiting;
  }

  Update(knowledge: WordKnowledge): LetterAnimation[] {
    this.state = State.Guessing;
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
