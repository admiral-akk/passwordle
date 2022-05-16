export abstract class Modal {
  private elements: HTMLElement[] = [];

  Exit(): Promise<void> {
    return Promise.resolve(this.elements.forEach(element => element.remove()));
  }

  protected container: HTMLElement;
  constructor(containerName: string) {
    const root = document.getElementById('lobby')!;
    const background = this.AddDiv('background', '', root);
    const base = this.AddDiv('modal', '', background);
    this.container = this.AddDiv(`${containerName}-container`, '', base);
  }

  protected AddButton(
    className: string,
    text: string,
    callback: () => void,
    parent?: HTMLElement
  ): HTMLButtonElement {
    const button = document.createElement('button');
    button.className = className;
    button.innerText = text;
    button.onclick = callback;
    this.AppendChild(button, parent);
    return button;
  }

  private AppendChild(child: HTMLElement, parent?: HTMLElement) {
    if (parent) {
      parent.appendChild(child);
    } else {
      this.container.appendChild(child);
    }
    this.elements.push(child);
  }

  protected AddDiv(
    className: string,
    text?: string,
    parent?: HTMLElement
  ): HTMLDivElement {
    const div = document.createElement('div');
    div.className = className;
    div.innerText = text ? text : '';
    this.AppendChild(div, parent);
    return div;
  }
  protected AddParagraph(
    className: string,
    text = '',
    parent?: HTMLElement
  ): HTMLParagraphElement {
    const paragraph = document.createElement('p');
    paragraph.innerHTML = text;
    paragraph.className = className;
    this.AppendChild(paragraph, parent);
    return paragraph;
  }
}
