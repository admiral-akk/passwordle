import {AnimateCSS, AnimationType} from '../../game/model/view/Animate';

export abstract class Modal {
  private elements: HTMLElement[] = [];
  private popup: HTMLElement | null = null;

  Exit(): Promise<void> {
    return Promise.resolve(this.elements.forEach(element => element.remove()));
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

  protected AddPopup(target: HTMLElement, text: string, durationSeconds = 1.5) {
    if (this.popup) {
      return;
    }
    this.popup = document.createElement('div');
    this.popup.className = 'popup';
    this.popup.innerText = text;
    target.appendChild(this.popup);
    this.elements.push(this.popup);
    AnimateCSS(this.popup, AnimationType.BounceIn, 0.5)
      .then(
        () =>
          new Promise(resolve =>
            setTimeout(resolve, 1000 * (durationSeconds - 1))
          )
      )
      .then(() => {
        if (!this.popup) {
          return;
        }
        AnimateCSS(this.popup, AnimationType.FadeOut, 0.5);
        return new Promise(resolve => setTimeout(resolve, 450));
      })
      .finally(() => {
        if (!this.popup) {
          return;
        }
        if (this.elements.indexOf(this.popup) > -1) {
          this.elements.splice(this.elements.indexOf(this.popup));
        }
        this.popup.remove();
        this.popup = null;
      });
  }
}
