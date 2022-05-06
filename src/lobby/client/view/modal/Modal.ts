export abstract class BaseModal {
  private elementsAdded: HTMLElement[] = [];
  Enter() {
    this.elementsAdded.forEach(element => (element.style.display = 'block'));
  }
  Exit() {
    this.elementsAdded.forEach(element => element.remove());
  }
  protected AddButton(
    parent: HTMLElement,
    className: string,
    name: string,
    callback: () => void
  ): HTMLButtonElement {
    const button = document.createElement('button');
    button.style.display = 'none';
    button.className = className;
    button.innerText = name;
    button.addEventListener('click', callback);
    parent.appendChild(button);
    this.elementsAdded.push(button);
    return button;
  }

  protected AddDiv(
    parent: HTMLElement,
    text: string,
    className = ''
  ): HTMLDivElement {
    const div = document.createElement('div');
    div.style.display = 'none';
    div.innerText = text;
    if (className !== '') {
      div.className = className;
    }
    parent.appendChild(div);
    this.elementsAdded.push(div);
    return div;
  }
}
