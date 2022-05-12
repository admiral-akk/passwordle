import {KeyboardView} from './KeyboardView';
import {OpponentBoardView} from './OpponentBoardView';
import {OpponentPasswordView} from './OpponentPasswordView';
import {Subview} from './Subview';
import {TimerView} from './TimerView';
import {YourBoardView} from './YourBoardView';
import {YourPasswordView} from './YourPasswordView';

export class GameView extends Subview {
  constructor(private base: HTMLElement) {
    super(base, 'game-board');
  }
  timer: TimerView = new TimerView(this.AddDiv(this.root, 'timer'));
  yourPassword: YourPasswordView = new YourPasswordView(
    this.AddDiv(this.root, 'answer')
  );
  opponentPassword: OpponentPasswordView = new OpponentPasswordView(
    this.AddDiv(this.root, 'target')
  );
  private playArea = this.AddDiv(this.root, 'play-area');
  yourBoard: YourBoardView = new YourBoardView(
    this.AddDiv(this.playArea, 'player')
  );
  opponentBoard: OpponentBoardView = new OpponentBoardView(
    this.AddDiv(this.playArea, 'opponent')
  );
  keyboard: KeyboardView = new KeyboardView(this.AddDiv(this.root, 'keyboard'));
}
