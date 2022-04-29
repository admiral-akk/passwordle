import {AnswerView} from './subview/AnswerView';
import {KeyboardView} from './subview/KeyboardView';
import {OpponentBoardView} from './subview/OpponentBoardView';
import {PlayerBoardView} from './subview/PlayerBoardView';
import {TargetView} from './subview/TargetView';
import {TimerView} from './subview/TimerView';

export class GameView {
  private answer: AnswerView;
  private playerBoard: PlayerBoardView;
  private opponentBoard: OpponentBoardView;
  private keyboard: KeyboardView;
  private timer: TimerView;
  private target: TargetView;

  constructor() {
    const root = document.getElementById('game-board')!;
    const game = AddDiv(root, 'board');
    const timer = AddDiv(game, 'timer');
    this.timer = new TimerView(timer);
    const player = AddDiv(game, 'player');
    const answer = AddDiv(player, 'answer');
    this.answer = new AnswerView(answer);
    const playerBoard = AddDiv(player, 'board');
    this.playerBoard = new PlayerBoardView(playerBoard);
    const opponent = AddDiv(game, 'opponent');
    const target = AddDiv(opponent, 'target');
    this.target = new TargetView(target);
    const opponentBoard = AddDiv(opponent, 'board');
    this.opponentBoard = new OpponentBoardView(opponentBoard);
    const keyboard = AddDiv(root, 'keyboard');
    this.keyboard = new KeyboardView(keyboard);
  }

  public Start() {}
}

function AddDiv(parent: HTMLElement, className: string): HTMLDivElement {
  const div = document.createElement('div');
  div.className = className;
  parent.appendChild(div);
  return div;
}
