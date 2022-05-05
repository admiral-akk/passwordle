import {BaseModal} from './Modal';

export class LoadingModal extends BaseModal {
  private text: HTMLDivElement;
  constructor(modal: HTMLDivElement) {
    super();
    this.text = this.AddDiv(modal, 'Loading...');
  }

  Enter(): void {
    this.text.style.display = 'block';
  }

  Exit(): void {
    this.text.remove();
  }
}
