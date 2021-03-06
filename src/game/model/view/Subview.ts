export abstract class Subview {
  protected root: HTMLDivElement;
  private elements: HTMLElement[] = [];
  private subviews: Subview[] = [];
  constructor(
    base: HTMLElement,
    rootClassName: string,
    explanationText = '',
    longFormExplanationText = ''
  ) {
    if (explanationText !== '') {
      this.AddExplanation(base, explanationText);
    }
    this.root = this.AddDiv(base, rootClassName);
    if (longFormExplanationText !== '') {
      this.root.classList.add('explain-hover');
      this.AddLongExplanation(base, longFormExplanationText);
    }
  }

  Reset() {
    this.subviews.forEach(subview => subview.Reset());
  }

  Exit() {
    this.subviews.forEach(subview => subview.Exit());
    this.elements.forEach(element => element.remove());
  }

  protected AddSubview(subview: Subview) {
    this.subviews.push(subview);
  }

  protected AddDiv(parent: HTMLElement, className: string): HTMLDivElement {
    const div = document.createElement('div');
    div.className = className;
    parent.appendChild(div);
    this.elements.push(div);
    return div;
  }

  protected AddSpan(
    parent: HTMLElement,
    className: string,
    dataIcon?: string
  ): HTMLSpanElement {
    const span = document.createElement('span');
    span.className = className;
    if (dataIcon) {
      span.setAttribute('data-icon', dataIcon);
    }
    parent.appendChild(span);
    this.elements.push(span);
    return span;
  }

  protected AddButton(
    parent: HTMLElement,
    className: string,
    text: string,
    callback: () => void
  ): HTMLButtonElement {
    const button = document.createElement('button');
    button.className = className;
    button.innerText = text;
    button.onclick = callback;
    parent.appendChild(button);
    this.elements.push(button);
    return button;
  }

  private AddExplanation(base: HTMLElement, text: string) {
    const explanation = this.AddDiv(base, 'explanation');
    explanation.innerText = text;
  }

  private AddLongExplanation(base: HTMLElement, text: string) {
    const explanation = this.AddDiv(base, 'long-explanation');
    explanation.innerText = text;
  }
}
