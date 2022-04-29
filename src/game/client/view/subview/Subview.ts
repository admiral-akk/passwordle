export abstract class Subview {
  protected root: HTMLDivElement;
  constructor(base: HTMLElement, rootClassName: string) {
    this.root = AddDiv(base, rootClassName);
  }
}

function AddDiv(parent: HTMLElement, className: string): HTMLDivElement {
  const div = document.createElement('div');
  div.className = className;
  parent.appendChild(div);
  return div;
}
