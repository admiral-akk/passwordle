import {BaseModal} from './Modal';

export class HostingModal extends BaseModal {
  private text: HTMLDivElement;
  private shareLink: HTMLButtonElement;

  constructor(modal: HTMLDivElement, copyToClipboard: () => void) {
    super();
    this.shareLink = this.AddButton(modal, 'Share Link', copyToClipboard);
    this.text = this.AddDiv(modal, 'Share the link');
  }

  Enter(): void {
    this.shareLink.style.display = 'block';
    this.text.style.display = 'block';
  }

  Exit(): void {
    this.shareLink.remove();
    this.text.remove();
  }
}
