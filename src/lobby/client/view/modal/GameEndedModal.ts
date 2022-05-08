import {EndGameState} from '../../../../game/EndGameState';
import {BaseModal} from './Modal';

export class GameEndedModal extends BaseModal {
  constructor(modal: HTMLDivElement, endingType: EndGameState) {
    super();
    let text: string;
    switch (endingType) {
      case EndGameState.None:
        text = 'Opponent disconnected! Returning to menu...';
        break;
    }
    this.AddDiv(modal, text);
  }
}
