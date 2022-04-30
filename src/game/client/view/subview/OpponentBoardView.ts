import {HintUpdate} from '../HintUpdate';
import {BoardView} from './BoardView';

export class OpponentBoardView extends BoardView {
  constructor(base: HTMLDivElement) {
    super(base);
  }

  HintUpdate(update: HintUpdate) {
    this.BaseHintUpdate(update.hint.opponentGuess, update.guessIndex);
  }
}
