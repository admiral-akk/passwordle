import {AnimateHint} from './AnimateKnowledge';
import {CharUpdate} from './CharUpdate';
import {HintUpdate} from './HintUpdate';
import {OpponentUpdate} from './OpponentUpdate';
import {YourPasswordView} from './subview/YourPasswordView';
import {EndGameState, EndGameView} from './subview/EndGameView';
import {KeyboardView} from './subview/KeyboardView';
import {OpponentBoardView} from './subview/OpponentBoardView';
import {YourBoardView} from './subview/PlayerBoardView';
import {OpponentPasswordView} from './subview/OpponentPasswordView';
import {TimerView} from './subview/TimerView';
import {LockedGuessError} from '../../network/updates/Updates';
import {ExplanationView} from './subview/ExplanationView';

export class GameView {
  private yourBoard: YourBoardView;
  private yourPassword: YourPasswordView;
  private opponentBoard: OpponentBoardView;
  private opponentPassword: OpponentPasswordView;
  private keyboard: KeyboardView;
  private timer: TimerView;
  private explanation: ExplanationView;
  private endGame: EndGameView;

  constructor() {
    const root = document.getElementById('game-board')!;
    this.timer = new TimerView(root);

    this.yourPassword = new YourPasswordView(root);
    this.opponentPassword = new OpponentPasswordView(root);
    const game = AddDiv(root, 'play-area');

    const player = AddDiv(game, 'player');
    this.yourBoard = new YourBoardView(player);

    const opponent = AddDiv(game, 'opponent');
    this.opponentBoard = new OpponentBoardView(opponent);

    this.keyboard = new KeyboardView(root);
    const explain = AddDiv(root, 'explain');
    this.explanation = new ExplanationView(
      explain,
      `Each red letter in your password is a revealed letter.\n
      Each green letter in your opponent's password is a revealed letter.\n
      Each guess you and your opponent make will reveal letters in both passwords.\n
       Win by revealing your opponent's password before they reveal yours.`
    );

    this.endGame = new EndGameView(root);
  }

  SetSecret(secret: string) {
    this.yourPassword.SetSecret(secret);
  }

  CharUpdate(update: CharUpdate) {
    this.yourBoard.CharUpdate(update);
  }

  HintUpdate(update: HintUpdate, updateComplete: () => void) {
    // Animated this.
    AnimateHint(
      update,
      this.yourBoard,
      this.opponentBoard,
      this.yourPassword,
      this.opponentPassword,
      updateComplete
    );
  }

  GameOver(state: EndGameState) {
    this.endGame.GameOver(state);
  }

  Reset() {
    this.yourBoard.Reset();
    this.opponentBoard.Reset();
    this.yourPassword.Reset();
    this.opponentPassword.Reset();
    this.endGame.Reset();
  }

  Exit() {
    this.yourBoard.Exit();
    this.opponentBoard.Exit();
    this.yourPassword.Exit();
    this.opponentPassword.Exit();
    this.endGame.Exit();
    this.explanation.Exit();
  }

  OpponentUpdate(update: OpponentUpdate) {
    this.opponentBoard.OpponentUpdate(update);
  }

  LockedGuessError(error: LockedGuessError) {
    this.yourBoard.SubmitError(error);
  }

  WordTooShort() {}

  WordNotValid() {}
}

function AddDiv(parent: HTMLElement, className: string): HTMLDivElement {
  const div = document.createElement('div');
  div.className = className;
  parent.appendChild(div);
  return div;
}
