import {AnswerView} from './subview/AnswerView';
import {BoardView} from './subview/BoardView';
import {KeyboardView} from './subview/KeyboardView';
import {TimerView} from './subview/TimerView';

export class GameView {
  private answer: AnswerView;
  private board: BoardView;
  private keyboard: KeyboardView;
  private timer: TimerView;

  constructor() {
    this.answer = new AnswerView();
    this.board = new BoardView();
    this.keyboard = new KeyboardView();
    this.timer = new TimerView();
  }

  public Start() {}
}
