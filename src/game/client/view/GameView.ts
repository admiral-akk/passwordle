import {CharUpdate} from './CharUpdate';
import {HintUpdate} from './HintUpdate';
import {OpponentUpdate, OpponentUpdateType} from './OpponentUpdate';
import {AnswerView} from './subview/AnswerView';
import {EndGameView} from './subview/EndGameView';
import {KeyboardView} from './subview/KeyboardView';
import {OpponentBoardView} from './subview/OpponentBoardView';
import {PlayerBoardView} from './subview/PlayerBoardView';
import {ExplanationView} from './subview/Subview';
import {TargetView} from './subview/TargetView';
import {TimerView} from './subview/TimerView';

export class GameView {
  private answer: AnswerView;
  private playerBoard: PlayerBoardView;
  private opponentBoard: OpponentBoardView;
  private keyboard: KeyboardView;
  private timer: TimerView;
  private target: TargetView;
  private endGame: EndGameView;

  constructor() {
    const root = document.getElementById('game-board')!;
    this.timer = new TimerView(root);

    this.target = new TargetView(root);
    const game = AddDiv(root, 'play-area');

    const player = AddDiv(game, 'player');
    this.playerBoard = new PlayerBoardView(player);

    const opponent = AddDiv(game, 'opponent');
    this.opponentBoard = new OpponentBoardView(opponent);
    this.answer = new AnswerView(root);

    this.keyboard = new KeyboardView(root);
    const explain = AddDiv(root, 'explain');
    new ExplanationView(
      explain,
      `Each guess made fills both the top and bottom block.\n
       The winner is the first to fill the hidden word that their opponent knows.`
    );

    this.endGame = new EndGameView(root);
  }

  SetSecret(secret: string) {
    this.answer.SetSecret(secret);
  }

  CharUpdate(update: CharUpdate) {
    this.playerBoard.CharUpdate(update);
  }

  HintUpdate(update: HintUpdate) {
    this.playerBoard.HintUpdate(update);
    this.opponentBoard.HintUpdate(update);
    this.answer.HintUpdate(update);
    this.target.HintUpdate(update);
  }

  GameOver(won: boolean) {
    this.endGame.GameOver(won);
  }

  Reset() {
    this.playerBoard.Reset();
    this.opponentBoard.Reset();
    this.answer.Reset();
    this.target.Reset();
    this.endGame.Reset();
  }

  OpponentUpdate(update: OpponentUpdate) {
    this.opponentBoard.OpponentUpdate(update);
  }
}

function AddDiv(parent: HTMLElement, className: string): HTMLDivElement {
  const div = document.createElement('div');
  div.className = className;
  parent.appendChild(div);
  return div;
}
