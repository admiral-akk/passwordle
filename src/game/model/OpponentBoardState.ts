import {WordKnowledge} from '../client/structs/WordKnowledge';
import {OpponentUpdate, OpponentUpdateType} from './OpponentUpdate';
import {OpponentBoardView} from './view/OpponentBoardView';
import {ToWord, Word} from '../structs/Word';
import {LetterAnimation} from './view/struct/Animation';

export class OpponentBoardState {
  private guesses: Word[] = [];
  private opponentCharCount = 0;
  private view: OpponentBoardView | null = null;

  constructor(hasView: boolean) {
    if (hasView) {
      this.view = new OpponentBoardView();
    }
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
    for (let i = 0; i < knowledge.guess.length; i++) {
      this.view?.SetCharKnowledge(
        this.guesses.length - 1,
        i,
        knowledge.guess[i],
        knowledge.letterKnowledge[i]
      );
    }
    return [];
  }

  Exit() {
    this.view?.Exit();
  }

  Reset() {
    this.guesses = [];
    this.opponentCharCount = 0;
  }
}
