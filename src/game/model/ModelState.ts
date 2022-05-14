import {Subview} from './view/Subview';

export abstract class ModelState<ViewType extends Subview> {
  constructor(protected view?: ViewType) {}

  Reset() {
    this.view?.Reset();
  }

  Exit() {
    this.view?.Exit();
  }
}
