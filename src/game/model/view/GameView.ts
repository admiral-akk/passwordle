import {KeyboardView} from './KeyboardView';
import {OpponentBoardView} from './OpponentBoardView';
import {OpponentPasswordView} from './OpponentPasswordView';
import {Subview} from './Subview';
import {TimerView} from './TimerView';
import {YourBoardView} from './YourBoardView';
import {YourPasswordView} from './YourPasswordView';

export class GameView extends Subview {
  constructor(base: HTMLElement, className = 'game-container') {
    super(base, className);
  }
  private gameboard = this.AddDiv(this.root, 'game-board');
  timer: TimerView = new TimerView(
    this.AddDiv(this.gameboard, 'timer-container')
  );
  yourPassword: YourPasswordView = new YourPasswordView(
    this.AddDiv(this.gameboard, 'answer-container')
  );
  opponentPassword: OpponentPasswordView = new OpponentPasswordView(
    this.AddDiv(this.gameboard, 'target-container')
  );
  private playArea = this.AddDiv(this.gameboard, 'play-area');
  yourBoard: YourBoardView = new YourBoardView(
    this.AddDiv(this.playArea, 'player')
  );
  opponentBoard: OpponentBoardView = new OpponentBoardView(
    this.AddDiv(this.playArea, 'opponent')
  );
  keyboard: KeyboardView = new KeyboardView(this.gameboard);
}
