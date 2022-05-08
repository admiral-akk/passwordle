export abstract class Modal {
  private elements: HTMLElement[] = [];

  Exit() {
    this.elements.forEach(element => element.remove());
  }

  protected base: HTMLElement;
  constructor() {
    const root = document.getElementById('lobby')!;
    const background = this.AddRootDiv(root, 'background');
    this.base = this.AddRootDiv(background, 'modal');
  }

  protected AddButton(
    className: string,
    text: string,
    callback: () => void
  ): HTMLButtonElement {
    const button = document.createElement('button');
    button.className = className;
    button.innerText = text;
    button.onclick = callback;
    this.base.appendChild(button);
    this.elements.push(button);
    return button;
  }

  private AddRootDiv(
    root: HTMLElement,
    className: string,
    text = ''
  ): HTMLDivElement {
    const div = document.createElement('div');
    div.className = className;
    div.innerText = text;
    root.appendChild(div);
    this.elements.push(div);
    return div;
  }

  protected AddDiv(className: string, text = ''): HTMLDivElement {
    return this.AddRootDiv(this.base, className, text);
  }
}
