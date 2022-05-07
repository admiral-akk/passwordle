import {EndGameState} from '../../../../game/client/view/subview/EndGameView';
import {BaseModal} from './Modal';

export class GameEndedModal extends BaseModal {
  constructor(modal: HTMLDivElement, endingType: EndGameState) {
    super();
    let text: string;
    switch (endingType) {
      case EndGameState.Disconnected:
        text = 'Opponent disconnected! Returning to menu...';
        break;
      case EndGameState.Lost:
        text = 'You lost! Returning to menu...';
        break;
      case EndGameState.Won:
        text = 'You won! Returning to menu...';
        break;
      case EndGameState.Tied:
        text = 'You tied! Returning to menu...';
        break;
    }
    this.AddDiv(modal, text);
  }
}
