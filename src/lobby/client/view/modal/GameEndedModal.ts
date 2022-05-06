import {BaseModal} from './Modal';

export class GameEndedModal extends BaseModal {
  constructor(modal: HTMLDivElement) {
    super();
    this.AddDiv(modal, 'Game over! Returning to menu...');
  }
}
