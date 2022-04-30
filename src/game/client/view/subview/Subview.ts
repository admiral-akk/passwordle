export abstract class Subview {
  protected root: HTMLDivElement;
  constructor(base: HTMLElement, rootClassName: string, explanationText = '') {
    this.root = AddDiv(base, rootClassName);
    if (explanationText !== '') {
      new ExplanationView(this.root, explanationText);
    }
  }
}
export class ExplanationView {
  private root: HTMLDivElement;
  constructor(base: HTMLElement, text = '') {
    this.root = AddDiv(base, 'explanation');
    this.root.innerText = text;
  }
}

function AddDiv(parent: HTMLElement, className: string): HTMLDivElement {
  const div = document.createElement('div');
  div.className = className;
  parent.appendChild(div);
  return div;
}
