import {BaseModal} from './Modal';

export class LobbyReadyModal extends BaseModal {
  private text: HTMLDivElement;

  constructor(modal: HTMLDivElement) {
    super();
    this.text = this.AddDiv(modal, 'Match found! Good luck!');
  }

  Enter(): void {
    this.text.style.display = 'block';
  }

  Exit(): void {
    this.text.remove();
  }
}
