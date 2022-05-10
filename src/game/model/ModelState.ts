import {Subview} from './view/Subview';

export abstract class ModelState<ViewType extends Subview> {
  protected view: ViewType | null = null;
  constructor(private readonly makeView: {new (): ViewType}, hasView = false) {
    if (hasView) {
      this.view = new makeView();
    }
  }

  Exit() {
    this.view?.Exit();
  }

  abstract Reset(): void;
}
