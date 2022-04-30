import {CharUpdate} from '../CharUpdate';
import {HintUpdate} from '../HintUpdate';
import {BoardView} from './BoardView';

export class PlayerBoardView extends BoardView {
  constructor(base: HTMLDivElement) {
    super(base, 'Your Guesses');
  }

  Update(update: CharUpdate) {
    this.BaseUpdate(update);
  }
  HintUpdate(update: HintUpdate) {
    this.BaseHintUpdate(update.hint.playerGuess, update.guessIndex);
  }
}
