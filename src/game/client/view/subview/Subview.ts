export abstract class Subview {
  protected root: HTMLDivElement;
  private elements: HTMLElement[] = [];
  private subviews: Subview[] = [];
  constructor(base: HTMLElement, rootClassName: string, explanationText = '') {
    this.root = this.AddDiv(base, rootClassName);
    if (explanationText !== '') {
      this.AddExplanation(base, explanationText);
    }
  }

  abstract Reset(): void;

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

  private AddExplanation(base: HTMLElement, text: string) {
    const explanation = this.AddDiv(base, 'explanation');
    explanation.innerText = text;
  }
}
