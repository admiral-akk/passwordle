import {BaseModal} from './Modal';

export class GameEndedModal extends BaseModal {
  private text: HTMLDivElement;

  constructor(modal: HTMLDivElement) {
    super();
    this.text = this.AddDiv(modal, 'Game over! Returning to menu...');
  }

  Enter(): void {
    this.text.style.display = 'block';
  }

  Exit(): void {
    this.text.remove();
  }
}
