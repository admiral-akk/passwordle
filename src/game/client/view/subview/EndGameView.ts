import {Subview} from './Subview';

export class EndGameView extends Subview {
  constructor(base: HTMLElement) {
    super(base, 'end-game');
    this.root.innerText = '';
  }

  GameOver(won: boolean) {
    if (won) {
      this.root.innerText = 'You won!';
    } else {
      this.root.innerText = 'You lost!';
    }
  }

  Reset(): void {
    this.root.innerText = '';
  }
}
