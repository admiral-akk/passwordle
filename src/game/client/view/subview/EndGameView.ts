import {Subview} from './Subview';

export enum EndGameState {
  Lost,
  Won,
  Tied,
}

export class EndGameView extends Subview {
  constructor(base: HTMLElement) {
    super(base, 'end-game');
    this.root.innerText = '';
  }

  GameOver(state: EndGameState) {
    switch (state) {
      case EndGameState.Lost:
        this.root.innerText = 'You lost!';
        break;
      case EndGameState.Won:
        this.root.innerText = 'You won!';
        break;
      case EndGameState.Tied:
        this.root.innerText = 'You tied!';
        break;
    }
  }

  Reset(): void {
    this.root.innerText = '';
  }
}
