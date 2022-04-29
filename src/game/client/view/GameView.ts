import {CharUpdate} from './CharUpdate';
import {HintUpdate} from './HintUpdate';
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
    this.timer = new TimerView(root);

    const game = AddDiv(root, 'play-area');

    const player = AddDiv(game, 'player');
    this.answer = new AnswerView(player);
    this.playerBoard = new PlayerBoardView(player);

    const opponent = AddDiv(game, 'opponent');
    this.target = new TargetView(opponent);
    this.opponentBoard = new OpponentBoardView(opponent);

    this.keyboard = new KeyboardView(root);
  }

  SetSecret(secret: string) {
    this.answer.SetSecret(secret);
  }

  CharUpdate(update: CharUpdate) {
    this.playerBoard.Update(update);
  }

  HintUpdate(update: HintUpdate) {
    this.playerBoard.HintUpdate(update);
    this.opponentBoard.HintUpdate(update);
  }
}

function AddDiv(parent: HTMLElement, className: string): HTMLDivElement {
  const div = document.createElement('div');
  div.className = className;
  parent.appendChild(div);
  return div;
}
