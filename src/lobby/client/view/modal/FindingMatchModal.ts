import {BaseModal} from './Modal';

export class FindingMatchModal extends BaseModal {
  private text: HTMLDivElement;

  constructor(modal: HTMLDivElement) {
    super();
    this.text = this.AddDiv(modal, 'Finding Match...');
  }

  Enter(): void {
    this.text.style.display = 'block';
  }

  Exit(): void {
    this.text.remove();
  }
}
