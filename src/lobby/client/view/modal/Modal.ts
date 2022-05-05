export abstract class BaseModal {
  abstract Enter(): void;
  abstract Exit(): void;

  protected AddButton(
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

  protected AddDiv(parent: HTMLElement, text: string): HTMLDivElement {
    const div = document.createElement('div');
    div.style.display = 'none';
    div.innerText = text;
    parent.appendChild(div);
    return div;
  }
}
