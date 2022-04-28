import {Modal} from './Modal';

export class HostingModal implements Modal {
  private text: HTMLDivElement;
  private shareLink: HTMLButtonElement;

  constructor(modal: HTMLDivElement, copyToClipboard: () => void) {
    this.shareLink = AddButton(modal, 'Share Link', copyToClipboard);
    this.text = AddDiv(modal, 'div');
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

function AddButton(
  parent: HTMLElement,
  name: string,
  callback: () => void
): HTMLButtonElement {
  const button = document.createElement('button');
  button.style.display = 'none';
  button.className = 'host-button';
  button.innerText = name;
  button.addEventListener('click', callback);
  parent.appendChild(button);
  return button;
}

function AddDiv(parent: HTMLElement, text: string): HTMLDivElement {
  const div = document.createElement('div');
  div.style.display = 'none';
  div.innerText = text;
  parent.appendChild(div);
  return div;
}
