import {BaseModal} from './Modal';

export class LobbyReadyModal extends BaseModal {
  constructor(modal: HTMLDivElement) {
    super();
    this.AddDiv(modal, 'Match found! Good luck!');
  }
}
