import {LetterState} from '../../structs/LetterState';
import {HintUpdate} from '../HintUpdate';
import {OpponentUpdate, OpponentUpdateType} from '../OpponentUpdate';
import {BoardView} from './BoardView';

export class OpponentBoardView extends BoardView {
  constructor(base: HTMLDivElement) {
    super(base, "Opponent's Guesses");
  }

  OpponentUpdate(update: OpponentUpdate) {
    switch (update.type) {
      case OpponentUpdateType.AddChar:
        this.words[update.wordIndex].SetChar(
          '',
          update.charIndex,
          LetterState.LightGrey
        );
        break;
      case OpponentUpdateType.Delete:
        this.words[update.wordIndex].SetChar(
          '',
          update.charIndex,
          LetterState.None
        );
        break;
    }
  }

  HintUpdate(update: HintUpdate) {
    this.BaseHintUpdate(update.hint.opponentGuess, update.guessIndex);
  }
}
