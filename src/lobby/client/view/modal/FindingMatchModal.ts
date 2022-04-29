import {Modal} from './Modal';

export class FindingMatchModal implements Modal {
  private text: HTMLDivElement;

  constructor(modal: HTMLDivElement) {
    this.text = AddDiv(modal, 'Finding Match...');
  }

  Enter(): void {
    this.text.style.display = 'block';
  }

  Exit(): void {
    this.text.remove();
  }
}

function AddDiv(parent: HTMLElement, text: string): HTMLDivElement {
  const div = document.createElement('div');
  div.style.display = 'none';
  div.innerText = text;
  parent.appendChild(div);
  return div;
}
