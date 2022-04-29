import {CharUpdate} from '../CharUpdate';
import {BoardView} from './BoardView';

export class PlayerBoardView extends BoardView {
  constructor(base: HTMLDivElement) {
    super(base);
  }

  Update(update: CharUpdate) {
    this.BaseUpdate(update);
  }
}
