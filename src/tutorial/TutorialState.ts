import {GameView} from '../game/model/view/GameView';

export class TutorialState {
  private leftBoard: GameView;
  private rightBoard: GameView;

  constructor(root: HTMLElement) {
    const container = document.createElement('div');
    container.className = 'game-container';
    root.appendChild(container);
    this.leftBoard = new GameView(container, 'left-board');
    this.rightBoard = new GameView(container, 'right-board');
  }
}
